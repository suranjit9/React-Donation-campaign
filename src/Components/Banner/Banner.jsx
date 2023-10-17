

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url("/src/Image/Rectangle 4281.png")' }}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full mx-auto">
                    <h1 className="mb-5 text-5xl text-black font-bold ">I Grow By Helping People In Need</h1>
                    <div className="form-control">
                        <div className="input-group justify-center ">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn bg-orange-600 text-[10px] text-white">
                            Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Banner;