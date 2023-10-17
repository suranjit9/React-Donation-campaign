import PropTypes from 'prop-types';

const SingalCard = ({ card }) => {
    const { Picture, Title, Category, CategoryColor,CategoryColor2 } = card;
    return (
        <div>
            <div className="card shadow-xl" style={{backgroundColor:CategoryColor}}>
                <figure><img src={Picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions " >
                        <div className="badge badge-outline font-semibold" style={{color:CategoryColor2}}>{Category}</div>
                    </div>
                  
                        <h2 className="card-title" style={{color:CategoryColor2}}>
                            {Title}
                        </h2>
                   
                </div>
            </div>
        </div>
    );
};

SingalCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export default SingalCard;