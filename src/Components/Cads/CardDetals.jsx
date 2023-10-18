import {  useLoaderData, useParams } from "react-router-dom";
import { saveItemLc } from "../../assets/Hook/LS";

// import { useParams } from "react-router-dom";
// import useData from "../../assets/Hook/Data";



const CardDetals = () => {
    const Data = useLoaderData();
    // const Data = useData();
    const { id } = useParams();
    const result = Data.find(cardDilu => cardDilu.id == id);
   
    const handleClick = id =>{
        saveItemLc(id);
        
        
    }


    return (
        <div>
            <div className="w-[80%] mx-auto ">
                <img className="w-full h-1/2 m-auto" src={result.Picture} alt="" />
                <div className="w-full mb-2 pb-2">
                    <div className="  bg-black bg-opacity-60  pl-4">
                       <button onClick={()=>handleClick(id)} className="btn " style={{backgroundColor:result.CategoryColor}}>Donate {result.Price }</button>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl lg:text-5xl font-bold mb-3">{result.Title}</h1>
                    <p>{result.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetals;

