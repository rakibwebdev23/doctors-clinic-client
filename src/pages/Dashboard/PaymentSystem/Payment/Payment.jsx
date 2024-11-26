import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// Todo: stripe api key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_api);
const Payment = () => {
    return (
        <div>
            <SectionTitle
                heading="Please Payment & Get Services"
            ></SectionTitle>
            <div className="mt-12">
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;