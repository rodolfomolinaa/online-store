import React, { useState, useEffect } from 'react';
import Products from '../../components/Products/Products';
import { Row, Col } from 'react-bootstrap';
import { getPokemons } from '../../requests/Pokemon';

function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response = await getPokemons();
            setPokemonList(response);
            setLoading(false);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <Row>
            <Col>
                {!loading ? (
                    // <Products productsList={pokemonList} onChangeProduct={onChangeProduct} onChangeProductQuantity={onChangeProductQuantity} />
                    <Products
                        productsList={pokemonList}
                    // onChangeProduct={onChangeProduct}
                    />
                ) : (
                        <div>Loading...</div>
                    )}

            </Col>
        </Row>
    )
}

export default Home
