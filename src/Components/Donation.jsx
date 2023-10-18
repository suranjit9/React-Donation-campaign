import { useEffect, useState } from "react";
import { getItemForLC } from "../assets/Hook/LS";
import { Link, useLoaderData } from "react-router-dom";



const Donation = () => {
    const [saveCard, setSaveCard] = useState([]);
    const [cardFore, setCardFore] = useState(4);

    // const [hide, setHide] = useState(false);
    const jobs = useLoaderData();


    useEffect(() => {
        const getStor = getItemForLC();
        console.log(getStor.length)


        if (jobs) {
            // const saveJobApliction = jobs.filter(job => getStor.includes(job.id));

            const saveJobApliction = [];
            for (const id of getStor) {
                const getjob = jobs.find(job => job.id == id)
                if (getjob) {
                    saveJobApliction.push(getjob);
                }
            }
            setSaveCard(saveJobApliction);
        }
    }, [jobs])
    
  
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto">
                {
                    saveCard.slice(0,cardFore).map(jini => <div key={jini.id} className="w-[80%]">
                        <div className="flex">
                            <img src={jini.Picture} alt="" />
                            <div className="pl-4 card-actions block">
                                <div className="badge badge-outline font-semibold " style={{ color: jini.CategoryColor2 }}>{jini.Category}
                                </div>
                                <h1 className="text-3xl font-semibold">{jini.Title}</h1>
                                <h2 className="text-xl font-semibold" style={{ color: jini.CategoryColor2 }}> {jini.Price}</h2>
                                <Link to={`/card/${jini.id}`}><button className="btn ">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className={`text-center mt-4 ${cardFore===saveCard.length?'hidden':''}`}>
            <button onClick={()=>setCardFore(saveCard.length)} className="btn btn-secondary">All Show</button>
            </div>
        </div>
    );
};

export default Donation;