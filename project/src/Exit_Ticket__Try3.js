// File order (for JS?) (for RETURN, see Line 19 in pics)  -  JSX code   return(HTML variations)  /*FROM Line 8 TO last b4 export*/

//Every JS file has JS as top (see blue highlight in pic)
import { useEffect, useState } from 'react';      /*import React and hooks*/


export default function PokemonCard() {                             /*export component to be used elsewhere*/
    const [pokemon, setPokemon] = useState(null);                   /*state to hold fetched data - empty array initially*/
    const [pokemonId, setPokemonId] = useState("10");               /*state to track loading status - 10 initially default ID#*/

    useEffect (() => {                                              /*useEffect hook to fetch data on component mount*/
            // JSX/React section - Route connects front- & back-ends; value as http...; Uses:   fetch (link or route)
            fetch (`https://cs-pokemon-api-2.onrender.com/pokemon/${pokemonId}`)                /*something fetched; tilde tick*/
                .then((res)=>res.json())                            /*"res" was fetched and converted to json, so usable*/
                .then((data)=>setPokemon(data))                     /*process data from res.json (not first "res" in prior line)*/
                .catch((err)=>console.error("Error fetching Pokemon:", err));         /*for error, display - LAST line*/
    }, [pokemonId]);                                                /*empty dependency array; refetch when ID changes*/

    const handleChange = (e) => {                                   /*function to handle input changes*/
        setPokemonId(e.target.value);                               /*update pokemonId state with input value*/
    }

    // const randomizeID(){
    //     const pokemonID = Math.floor(Math.random() * 10) +1;
    //     setPokemonId(pokemonID);
    // }

    // HTML variations     
    return(                                                             /*Line 19 in picture*/             
                   
        <div style={{ textAlign: 'center', marginTop: "2rem" }}>        {/*inline style for center alignment*/}
            <h1>Pokemon Viewer</h1>
            <input
                type="number"
                value={pokemonId}                                       /*input value bound to pokemonId state - see Line 19*/
                onChange={handleChange}                                 /*onChange event to handle input changes*/
                placeholder="Enter Pokemon ID"                          /*placeholder text to guide user*/
                style={{ padding: "0.5rem", marginBottom: "1rem" }}     /*inline style for margin*/
            /> 
            {pokemon ? (                                    /*conditional rendering based on whether pokemon data is available*/
                <div>
                    <h3>{pokemon.title}</h3>
                    <img src={pokemon.image_url} alt={pokemon.title} />      {/*display pokemon image*/}
                    <p><strong>Type:</strong> {pokemon.type}</p>
                    <p>{pokemon.description}</p>                                    {/*join description array into string*/}
                </div>
            ) : (
                <p>Loading Pokemon...</p>        /*loading message while fetching data - similar to "false" condition*/
            )}
        </div>
    );                                                       /*end of return section*/
}                                                           /*end of function*/
