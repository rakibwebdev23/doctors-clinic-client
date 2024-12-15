const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="lg:text-center lg:space-y-4 space-y-2 lg:p-12 p-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-blue-600 uppercase leading-tight text-center">{heading}</h2>
            <p className="text-center lg:w-3/4 mx-auto break-words text-sm lg:text-base">
                {subHeading}
            </p>
        </div>
    );
};

export default SectionTitle;
