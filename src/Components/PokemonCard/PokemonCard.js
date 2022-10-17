import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = (id) => {
        console.log("Cliquei no botão de evoluir")

        if(id===0){
          props.setPokemon({...props.pokemon, id:5, name:"Pikachu", weight:6, image:"https://archives.bulbagarden.net/media/upload/archive/0/0d/20100904002342%21025Pikachu.png" })
        }
        else if(id===5){
          props.setPokemon({...props.pokemon, id:6, name:"Raichu", weight:25, image:"https://archives.bulbagarden.net/media/upload/archive/8/88/20100629124304%21026Raichu.png" })
        }
        else if(id===6){
          alert("pokemon não tem mais evolução")
        }
    
        else if(id===1){
          props.setPokemon({...props.pokemon, id:3, name:"Charmeleon", weight:10, image:"https://archives.bulbagarden.net/media/upload/archive/4/4a/20130810021222%21005Charmeleon.png" })
        }
        else if(id===3){
          props.setPokemon({...props.pokemon, id:4, name:"Charlizard", weight:150,  image:"https://archives.bulbagarden.net/media/upload/archive/7/7e/20130512093836%21006Charizard.png" })
        }
        else if(id===4){
          alert("pokemon não tem mais evolução")
        }
    }
    
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(props.pokemon.id)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard