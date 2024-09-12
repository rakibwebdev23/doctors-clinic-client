
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-orange-500">{heading}</h2>
            <p className="text-balance">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;