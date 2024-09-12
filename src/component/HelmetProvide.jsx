import { Helmet } from "react-helmet-async";

const HelmetProvide = ({helmetTitle}) => {
    return (
        <div>
            <Helmet>
                <title>Doctors Chamber | { helmetTitle }</title>
            </Helmet>
        </div>
    );
};

export default HelmetProvide;