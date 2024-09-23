import { Helmet } from "react-helmet-async";

const HelmetProvide = ({helmetTitle}) => {
    return (
        <div>
            <Helmet>
                <title>Doctors Clinic | { helmetTitle }</title>
            </Helmet>
        </div>
    );
};

export default HelmetProvide;