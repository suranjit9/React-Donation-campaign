import useData from "../../assets/Hook/Data";
import SingalCard from "./SingalCard";

const Cads = () => {
   const phone = useData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 mt-9">
            {
                phone.map(card => <SingalCard 
                    key={card.id}
                    card={card}
                    ></SingalCard>)
            }
        </div>
    );
};

export default Cads;