import Card from "./Card";
import pokemondata from '../static/pokemons.json'
import styles from '../css/container.module.css'

const Container = ({type}) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.containerTitle}>Pokemon Cards</h1>
            {pokemondata[type].map(pokemon => {
                return (
                    <Card key={pokemon.id} type={type} {...pokemon}/>                    
                )
            })}                     
        </section>
    )
}

export default Container;

console.log(pokemondata);