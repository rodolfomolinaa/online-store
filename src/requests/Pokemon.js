import axios from 'axios';

export const getPokemons = async () => {
    const offset = 0;
    const limit = 12;

    try {

        let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
        let pokemonsEdnpoints = data.results.map(pokemon => pokemon.url);
        let pokemonPromises = pokemonsEdnpoints.map(endpoint => axios.get(endpoint));
        const pokemonList = await Promise.all(pokemonPromises)
            .then(async function (pokemonResponse) {
                let pokemonData = [];
                for (const pokemon of pokemonResponse) {
                    pokemonData.push({
                        id: pokemon.data.id,
                        name: pokemon.data.name,
                        img: pokemon.data.sprites.front_default,
                        price: Math.floor(Math.random() * Math.floor(10) + 1),
                        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!"
                    })
                }
                return pokemonData;
            })

        return pokemonList;
    } catch (err) {
        console.log('err', err);
    }
};


export const getPokemon = async (productId) => {
    try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parseInt(productId)}`)
            .then(res => {
                const pokemonData = {
                    id: res.data.id,
                    name: res.data.name,
                    img: res.data.sprites.front_default,
                    price: Math.floor(Math.random() * Math.floor(10) + 1),
                    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
                };
                return pokemonData;
            })
        return pokemon;
    } catch (error) {
        console.log(error);
    }
}