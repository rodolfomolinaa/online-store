import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../../requests/Pokemon';

function ProductDetail() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response = await getPokemon(params.productId);
            setProduct(response);
            setLoading(false);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                !loading ? (
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

export default ProductDetail;
