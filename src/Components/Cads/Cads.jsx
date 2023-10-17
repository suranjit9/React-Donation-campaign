import useData from "../../assets/Hook/Data";
import SingalCard from "./SingalCard";

const Cads = () => {
   const phone = useData();
//    console.log(phone.length)
    return (
        <div className="grid grid-cols-4 gap-5">
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