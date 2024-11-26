
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="lg:text-center space-y-4 lg:p-8 p-4">
            <h2 className="lg:text-4xl text-3xl leading-tight font-bold text-blue-600 uppercase">{heading}</h2>
            <p className="text-justify lg:text-center lg:w-3/4 mx-auto">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;