import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useAppointment from "../../../../hooks/useAppointment";
import { useNavigate } from "react-router-dom";

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

    const totalVisitFee = appointment.reduce((total, doctor) => total + doctor.visitFee, 0);

    useEffect(() => {
        if (totalVisitFee > 0) {
            axiosSecure.post('/create_payment-intent', { visitFee: totalVisitFee })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalVisitFee]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const cardNumber = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardNumber
        });

        if (error) {
            setError(error.message);
        } else {
            setError("");
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumber,
                billing_details: {
                    name: user?.displayName || "Anonymous",
                    email: user?.email || "Anonymous",
                },
            },
        });

        if (confirmError) {
            setError(confirmError.message);
        } else if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);

            const paymentInfo = {
                email: user.email,
                transactionId: paymentIntent.id,
                visitFee: totalVisitFee,
                date: new Date(),
                appointmentIds: appointment.map(a => a._id),
                doctorIds: appointment.map(a => a.doctorId),
                status: "pending",
            };

            const res = await axiosSecure.post("/payments", paymentInfo);
            if (res.data?.paymentResult?.insertedId) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/dashboard/paymentHistory");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Number */}
            <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                <div className="p-3 border rounded-lg shadow-sm bg-white w-full">
                    <CardNumberElement
                        options={{
                            style: {
                                base: { fontSize: "16px", color: "#424770" },
                                invalid: { color: "#9e2146" },
                            },
                        }}
                    />
                </div>
            </div>

            {/* Expiry and CVC */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                    <div className="p-3 border rounded-lg shadow-sm bg-white w-full">
                        <CardExpiryElement
                            options={{
                                style: {
                                    base: { fontSize: "16px", color: "#424770" },
                                    invalid: { color: "#9e2146" },
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-2">CVC</label>
                    <div className="p-3 border rounded-lg shadow-sm bg-white w-full">
                        <CardCvcElement
                            options={{
                                style: {
                                    base: { fontSize: "16px", color: "#424770" },
                                    invalid: { color: "#9e2146" },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
           
            {transactionId && (
                <p className="text-green-600 text-sm">
                    Payment Transaction ID: {transactionId}
                </p>
            )}

            <button
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md 
                hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 
                disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
                type="submit"
                disabled={!stripe || !clientSecret}
            >
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;
