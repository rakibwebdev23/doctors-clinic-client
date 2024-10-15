import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useAppointment from "../../../../hooks/useAppointment";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [appointment, refetch] = useAppointment();
    const totalVisitFee = appointment.reduce((totalFee, doctorFee) => totalFee + doctorFee.visitFee, 0);

    useEffect(() => {
        if (totalVisitFee > 0) {
            axiosSecure.post('/create_payment-intent', { visitFee: totalVisitFee })
                .then(res => {
                    console.log('Payment Secret', res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalVisitFee]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('Payment error', error);
            setError(error.message);
        }
        else {
            console.log('Payment method', paymentMethod);
            setError('');
        }

        // Payment confirmation
        const { paymentIntent, error: errorConfirm } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'annonymous',
                    email: user?.email || 'annonymous'
                }
            }
        });

        if (errorConfirm) {
            console.log('Payment error:', errorConfirm);

        }
        else {
            console.log("PaymentIntent Confirm:", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("Payment confirm TransactionId:", paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const paymentInfo = {
                    email: user.email,
                    transactionId: paymentIntent.id,
                    visitFee: totalVisitFee,
                    date: new Date(),
                    appointmentIds: appointment.map(appoint => appoint._id),
                    doctorIds: appointment.map(doctor => doctor.doctorId),
                    status: 'pending'
                }

                console.log(paymentInfo);
                const res = await axiosSecure.post('/payments', paymentInfo)
                console.log('payment saved', res.data);


                if (res.data?.paymentResult?.insertedId) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your payment Confirmed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory');
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
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
            <p className="text-red-600 my-2">{error}</p>
            {transactionId && <p className="text-green-600">Payment Transaction Id: {transactionId}</p>}
            <button className="mt-10 btn btn-outline btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;