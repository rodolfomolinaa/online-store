import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../requests/Product';

function ProductDetail() {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await getProduct(params.productId);
            setProduct(response);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let content = <h1>Loading...</h1>;

    if (product && !loading) {
        content = (
            <>
                <h1>{product.title}</h1>
                <p>{product.detail}</p>
                <Image variant="bottom" src={product.img} />
            </>
        );
    } else {
        content = <h1>Product not found...</h1>;
    }

    return (
        <div style={{ paddingTop: '50px', textAlign: 'center' }}>{content}</div>
    );
}

export default ProductDetail;
