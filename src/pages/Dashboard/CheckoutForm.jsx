import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import './CheckoutForm.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useSelectedClasses from "../../hooks/useSelectedClasses";
import { useParams } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ course }) => {
    const { refetch } = useSelectedClasses();

    const { price, name, classPicture, numberOfStudents, instructorName, availableSeats } = course;

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [classesError, setClassesError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const createPaymentIntent = async () => {
            if (price > 0) {
                try {
                    const response = await axiosSecure.post('/create-payment-intent', { price });
                    setClientSecret(response.data.clientSecret);
                } catch (error) {
                    console.log('Error:', error);
                }
            }
        };

        createPaymentIntent();
    }, [price, axiosSecure]);

    const handlePay = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setClassesError(error.message);
            return;
        }

        setClassesError('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            }
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                studentName: user?.displayName,
                studentPicture: user?.photoURL,
                transactionId: paymentIntent.id,
                price,
                date: new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
                quantity: course.length,
                name,
                classPicture,
                numberOfStudents,
                instructorName,
                availableSeats,
                _id: course._id,
            };

            axiosSecure.post(`/enrolled/${id}`, payment)
                .then(res => {
                    console.log(res.data);

                    if (res.data.insertResult.insertedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "This Course Added to Your Selected Courses",
                            showConfirmButton: false,
                            timer: 1500,
                        });

                        // Update availableSeats value
                        axios.put(`/enrolled/${id}`, { _id: id, availableSeats: availableSeats - 1 })
                            .then(response => {
                                console.log(response.data);
                                // Handle successful update
                            })
                            .catch(error => {
                                console.log('Error:', error);
                                // Handle error
                            });
                    }
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        }
    };

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handlePay}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-[#0f2248] border-none text-white hover:bg-[#0b1b3c] mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {classesError && <p className="text-red-600 ml-8">{classesError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
