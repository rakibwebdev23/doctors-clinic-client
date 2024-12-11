import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// Todo: stripe api key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_api);
const Payment = () => {
    return (
        <div className="mt-8 bg-gradient-to-b from-green-300 to-green-500 p-6 flex justify-center items-center">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 uppercase">
                    Please Payment & Get Services
                </h2>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;