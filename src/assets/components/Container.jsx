import Card from "./Card";
import pokemondata from '../static/pokemons.json'

const Container = ({type}) => {
    return (
        <section className="container">
            <h1 className={"container-title"}>Pokemon Cards</h1>
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