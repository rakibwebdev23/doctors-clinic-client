const BannerShared = ({ img, title, subTitle, description }) => {
    return (
        <div
            className="hero min-h-screen bg-fixed bg-cover bg-center mb-16 font-poppins"
            style={{ backgroundImage: `url("${img}")` }}
        >
            {/* Overlay Section */}
            <div className="hero-overlay bg-blue-600 bg-opacity-40"></div>

            {/* content wrapper */}
            <div className="hero-content text-center max-w-full p-4 md:p-8 lg:p-12 lg:mt-10">
                <div className="w-full lg:w-3/4 mx-auto bg-orange-500 bg-opacity-60 rounded-xl p-4 md:p-6 lg:p-10 shadow-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-blue-600 mb-6 md:mb-8 leading-tight">
                        {subTitle}
                    </h1>
                    <p className="text-white text-base md:text-lg lg:text-xl tracking-normal leading-relaxed text-center lg:text-justify">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerShared;
