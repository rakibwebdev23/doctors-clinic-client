
const BannerShared = ({ img, title, subTitle, description }) => {
    return (
        <div
            className="hero min-h-screen bg-fixed mb-16 font-poppins" style={{backgroundImage: `url("${img}")`}}>
            <div className="hero-content hero-overlay bg-blue-600 bg-opacity-30 text-center max-w-full">
                <div className="lg:h-[50%] w-[75%] justify-center bg-orange-500 bg-opacity-50 flex items-center lg:p-4 p-6 text-justify lg:text-center mx-auto mt-6">
                    <div className='lg:p-10'>
                        <div>
                            <h2 className="text-4xl font-bold text-orange-600 mb-2">{ title}</h2>
                            <h1 className="mb-5 lg:text-5xl text-4xl font-bold uppercase text-blue-600 mt-6">{ subTitle }</h1>
                        </div>
                        <p className="mb-5 text-white leading-relaxed">
                           {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerShared;