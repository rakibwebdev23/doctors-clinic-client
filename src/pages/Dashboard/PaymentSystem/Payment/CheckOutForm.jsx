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
                    // console.log('Payment Secret', res.data.clientSecret);
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
            // console.log('Payment error', error);
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
            // console.log("PaymentIntent Confirm:", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                // console.log("Payment confirm TransactionId:", paymentIntent.id);
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

                // console.log(paymentInfo);
                const res = await axiosSecure.post('/payments', paymentInfo)
                // console.log('payment saved', res.data);


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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
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
                    className="p-3 border rounded-lg shadow-sm bg-white w-full"
                />
            </div>

            {/* Display Error Message */}
            <p className="text-red-600 text-sm my-2 px-2">{error}</p>

            {/* Transaction ID */}
            {transactionId && (
                <p className="text-green-600 text-sm px-2">
                    Payment Transaction Id: {transactionId}
                </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center px-2">
                <button
                    className="mt-4 w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-green-500 to-green-700 
                text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-800 
                focus:outline-none focus:ring-2 focus:ring-green-400 disabled:bg-gray-400 
                disabled:cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </div>
        </form>

    );
};

export default CheckOutForm;