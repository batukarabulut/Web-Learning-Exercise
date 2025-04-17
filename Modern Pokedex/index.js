const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.getElementById("poke-input");
const pokeContainer = document.querySelector(".poke-container");

const colors = {
    fire: '#FDDfDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#d6b3ff',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ice: '#e0f5ff',
  };
  

const pokeCount = 151;

//

/* async function fetchData() {

    try{
    const pokemonName = searchInput.value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if(!response){
        throw new Error("Could not fetch resources!");
    }
    const data = await response.json();
    const pokeboxName = data.name;
    const pokeWeight = data.weight;

    console.log(pokeboxName);
    console.log(pokeWeight);

}
    catch(error){

    }

} */

const initPokemon = async() => {
    for (let i = 1; i < pokeCount; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async(id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    createPokemonBox(data);
}

const createPokemonBox = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3,"0");
    const weight = pokemon.weight;
    const type = pokemon.types[0].type.name;
    const capType = type[0].toUpperCase() + type.slice(1);
    const color = colors[type];

   const pokemonElement = document.createElement("div");
   pokemonElement.classList.add("poke-box");
   pokemonElement.style.backgroundColor = color;

   

   const pokeboxImg = document.createElement("img");
   pokeboxImg.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
   
   const pokeboxh4 = document.createElement("h4");
   pokeboxh4.textContent = `${name}`;
   pokeboxh4.classList.add("poke-name");

   const pokeboxp1 = document.createElement("p");
   pokeboxp1.textContent = `#${id}`;
   pokeboxp1.classList.add("poke-id");


   const pokeboxp2 = document.createElement("p");
   pokeboxp2.textContent = `Weight: ${weight} kg`;
   pokeboxp2.classList.add("poke-weight");

   const pokeboxp3 = document.createElement("p");
   pokeboxp3.textContent = `Type: ${capType}`;

   
   pokemonElement.appendChild(pokeboxImg);
   pokemonElement.appendChild(pokeboxh4);
   pokemonElement.appendChild(pokeboxp1);
   pokemonElement.appendChild(pokeboxp2);
   pokemonElement.appendChild(pokeboxp3);
   pokeContainer.appendChild(pokemonElement);

}

initPokemon();

searchInput.addEventListener("input", function(e){
    const searchValue = searchInput.value.toLowerCase();
    const pokemonNames = document.querySelectorAll(".poke-name");
    
    pokemonNames.forEach(pokemonName => {
        pokemonName.parentElement.style.display = "block";

        if(!pokemonName.innerHTML.toLowerCase().includes(searchValue)){
            pokemonName.parentElement.style.display = "none";
        }
    });


    
    
});

