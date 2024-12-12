
const BannerShared = ({ img, title, subTitle, description }) => {
    return (
        <div
            className="hero min-h-screen bg-fixed mb-16 font-poppins" 
            style={{ backgroundImage: `url("${img}")` }}
        >
            <div className="hero-content hero-overlay bg-blue-600 bg-opacity-30 text-center max-w-full">
                <div className="w-full lg:w-3/4 justify-center bg-orange-500 bg-opacity-40 flex items-center p-2 text-center mx-auto mt-14 rounded-xl lg:rounded-none">
                    <div className="p-4 md:p-8 lg:p-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                                {title}
                            </h2>
                            <h1 className="mb-4 md:mb-5 text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-blue-600 mt-4 md:mt-6">
                                {subTitle}
                            </h1>
                        </div>
                        <p className="mb-4 md:mb-5 text-white lg:text-justify tracking-normal text-left">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerShared;