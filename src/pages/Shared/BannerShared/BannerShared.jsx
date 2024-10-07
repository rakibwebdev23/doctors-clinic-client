
const BannerShared = ({ img, title, subTitle, description }) => {
    return (
        <div
            className="hero h-[700px] bg-fixed mb-16" style={{backgroundImage: `url("${img}")`}}>
            <div className="hero-content hero-overlay bg-blue-500 bg-opacity-40 text-center">
                <div className="md:h-[300px] w-[75%] bg-orange-600 bg-opacity-50 flex items-center">
                    <div className='px-24'>
                        <div>
                            <h2 className="text-4xl font-bold text-orange-600 mb-2">{ title}</h2>
                            <h1 className="mb-5 text-5xl font-bold uppercase text-blue-500">{ subTitle }</h1>
                        </div>
                        <p className="mb-5 text-white">
                           {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerShared;