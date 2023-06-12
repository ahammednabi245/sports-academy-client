import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`https://sports-academies-server-nu.vercel.app/selectedCourse/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCourse(data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <table className="table table-xs">
                    <thead className="font-semibold bg bg-[#0f2248] text-white h-[50px]">
                        <tr className="text-center text-lg">
                            <th className="w-[25%]">Image</th>
                            <th className="w-[25%]">Name</th>
                            <th className="w-[25%]">Instructor Name</th>
                            <th className="w-[25%]">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            <tr className="text-center text-lg">
                                <td>
                                    <img
                                        className="w-[100%] p-4 rounded-[30px]"
                                        src={course.classPicture}
                                        alt=""
                                    />
                                </td>
                                <td className="text-[16px]">{course.name}</td>
                                <td className="text-[16px]">{course.instructorName}</td>
                                <td className="text-[16px]">{course.price}</td>
                               

                            </tr>
                 
                    </tbody>
                </table>
            </div>
            <div className=' w-[100%] mt-9 ml-[175px]'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm course={course}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
