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
        fetch(`http://localhost:5000/selectedCourse/${id}`)
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
            <h1>{course.price}</h1>
            <p>{course.name}</p>
            <div>
                <Elements stripe={stripePromise}>
                <CheckoutForm  course={course}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
