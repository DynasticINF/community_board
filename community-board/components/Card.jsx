import './Card.css';

const Card = (props) => {
    return(
        <div className='Card'>
            <img className='CardImg' src={props.img}/>;
            <h2 className='CardTitle'> {props.title}</h2>;
            <h3 className='CardCity'>{props.city}</h3>;
            <div>
                <a href={props.link} target="_blank" rel="noreferrer">
                <button className='CardBtn'>Visit Website</button>                    
                </a>
            </div>
        </div>
    )
}

export default Card;