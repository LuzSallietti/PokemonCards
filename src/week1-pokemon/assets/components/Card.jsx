import styles from '../css/card.module.css'

const Card = ({type, id, name, avatar, powerLevel, agressive}) => {
    return (
        <article className={`${styles.card} ${styles[type]}`}>
            <div className={styles.cardContainer}>
                <img className={styles.cardImage} src={avatar} alt={name}></img>
            </div>            
            <h2>{name}</h2>
            <p><strong>Power Level:</strong> {powerLevel}</p>
            {agressive?<p>Agressive</p>:<p>Harmless</p> }
            <p>Type: {type}</p>
        </article>
        
    )
}
export default Card;