import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        /* ir al web service.. y obtener detalles del producto seleccionado... */
        async function getProduct() {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${parseInt(params.productId)}`)
                .then(res => {
                    let productData = {
                        id: res.data.id,
                        name: res.data.name,
                        img: res.data.sprites.front_default,
                        price: Math.floor(Math.random() * Math.floor(10) + 1),
                        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
                    };
                    setProduct(productData);
                })
        }
        getProduct();
    }, []);

    return (
        <>
            {
                product ? (
                    <div style={{ textAlign: "center" }}>
                        <h1>{product.title}</h1>
                        <img src={product.img} alt="product" style={{ height: "300px", width: "300px" }} />
                        <h2>{product.details}</h2>
                    </div>
                ) : (
                        <div style={{ textAlign: "center" }}><h1>Product not found...</h1></div>
                    )
            }
        </>
    )
}

export default ProductDetail
