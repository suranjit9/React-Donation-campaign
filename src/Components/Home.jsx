import Banner from "./Banner/Banner";
import Cads from "./Cads/Cads";


const Home = () => {
    return (
        <div>
            
          <Banner></Banner>
          <div className="w-[80%] mx-auto">
            <Cads></Cads>
          </div>
        </div>
    );
};

export default Home;