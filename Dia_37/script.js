const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
  fire: 'rgba(240,80,48,0.7)', 
  grass: 'rgba(120,200,80,0.7)',
  electric: 'rgba(248,208,48,0.7)',
  water: 'rgba(56,153,248,0.7)',
  ground: 'rgba(234,214,164,0.7)',
  rock: 'rgba(184,160,88,0.7)',
  fairy: 'rgba(231,159,231,0.7)',
  poison: 'rgba(176,88,160,0.7)',
  bug: 'rgba(168,184,32,0.7)',
  dragon: 'rgba(160,80,56,0.7)',
  psychic: 'rgba(248,112,160,0.7)',
  flying: 'rgba(152,168,240,0.7)',
  fighting: 'rgba(160,80,56,0.7)',
  normal: 'rgba(168,160,144,0.7)',
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
  for(let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')

  const poke_types = pokemon.types.map(type => type.type.name)
  const type = main_types.find(type => poke_types.indexOf(type) > -1)
  const color = colors[type]

  pokemonEl.style.backgroundColor = color

  const pokemonInnerHTML = `
  <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML

  poke_container.appendChild(pokemonEl)
}

fetchPokemons()