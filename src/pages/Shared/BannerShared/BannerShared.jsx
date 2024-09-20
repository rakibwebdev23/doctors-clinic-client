
const BannerShared = ({ img, title, subTitle, description }) => {
    return (
        <div
            className="hero h-[700px] bg-fixed mb-16" style={{backgroundImage: `url("${img}")`}}>
            <div className="hero-content text-center">
                <div className="md:h-[300px] w-[75%] bg-black bg-opacity-40 flex items-center">
                    <div className='px-24'>
                        <div>
                            <h2 className="text-4xl font-bold text-blue-600 mb-2">{ title}</h2>
                            <h1 className="mb-5 text-5xl font-bold uppercase text-orange-500">{ subTitle }</h1>
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