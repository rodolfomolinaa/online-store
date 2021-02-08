import React, { useState, useEffect } from 'react';
import Products from '../../components/Products/Products';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Home() {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(12);
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState();


    const fetchDataCall = async () => {
        try {

            let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
            let pokemonsEdnpoints = data.results.map(pokemon => pokemon.url);
            let pokemonPromises = pokemonsEdnpoints.map(endpoint => axios.get(endpoint));
            const pokemonList = await Promise.all(pokemonPromises)
                .then(async function (pokemonResponse) {
                    console.log('pokemon response', pokemonResponse);
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

    const onChangeProduct = (products) => {
        console.log('change product', products)
        setPokemonList(products);
    }

    // const onChangeProductQuantity = () => {
    //     console.log(quantity)
    // }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response = await fetchDataCall();
            setPokemonList(response);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (

        <Row>
            <Col>
                {!loading ? (
                    // <Products productsList={pokemonList} onChangeProduct={onChangeProduct} onChangeProductQuantity={onChangeProductQuantity} />
                    <Products productsList={pokemonList} onChangeProduct={onChangeProduct} />
                ) : (
                        <div>Loading...</div>
                    )}

            </Col>
        </Row>
    )
}

export default Home
