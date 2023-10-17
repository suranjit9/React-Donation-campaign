
import { useEffect, useState } from "react";
const useData = () => {
    const [data, setdata] =useState([])
    useEffect(()=>{
        fetch('/public/Data.json')
        .then(res => res.json())
        .then(Data => setdata(Data))
        
    }
    ,[])
    return (data);
};

export default useData;




