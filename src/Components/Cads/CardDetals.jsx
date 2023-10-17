import { useLoaderData, useParams } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import useData from "../../assets/Hook/Data";



const CardDetals = () => {
    const Data = useLoaderData();
    // const Data = useData();
    const {id} = useParams();
    const result = Data.find(cardDilu => cardDilu.id == id);

    console.log(result);


    return (
        <div>
            <div className="w-[80%] mx-auto">
           <img className="w-full h-1/2 m-auto" src={result.Picture} alt="" />
            </div>
        </div>
    );
};

export default CardDetals;