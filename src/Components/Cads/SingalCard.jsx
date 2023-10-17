import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingalCard = ({ card }) => {
    const {id, Picture, Title, Category, CategoryColor,CategoryColor2 } = card;
    

    return (
        
        <Link to={`card/${id}`}>
            <div className="card max-h-72 shadow-xl " style={{backgroundColor:CategoryColor}}>
                <figure><img src={Picture} alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className="card-actions " >
                        <div className="badge badge-outline font-semibold" style={{color:CategoryColor2}}>{Category}</div>
                    </div>
                  
                        <h2 className="card-title text-xl" style={{color:CategoryColor2}}>
                            {Title}
                        </h2>
                   
                </div>
            </div>
        </Link>
    );
};

SingalCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export default SingalCard;