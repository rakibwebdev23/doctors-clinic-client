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
                <div className="w-full lg:w-3/4 mx-auto bg-orange-500 bg-opacity-50 rounded-xl p-4 md:p-6 lg:p-10 shadow-lg">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-4 md:mb-6 leading-tight">
                            {title}
                        </h2>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-blue-600 mb-6 md:mb-8 leading-tight">
                            {subTitle}
                        </h1>
                    </div>
                    <p className="text-white text-base md:text-lg lg:text-xl tracking-normal leading-relaxed text-center lg:text-justify">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerShared;
