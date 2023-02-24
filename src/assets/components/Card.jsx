const Card = ({type, id, name, avatar, powerLevel, agressive}) => {
    return (
        <article className={`card ${type}`}>
            <div className>
                <img className="card-img"src={avatar} alt={name}></img>
            </div>            
            <h2>{name}</h2>
            <p><strong>Power Level:</strong> {powerLevel}</p>
            {agressive?<p>Agressive</p>:<p>Harmless</p> }
            <p>Type: {type}</p>
        </article>
        
    )
}
export default Card;