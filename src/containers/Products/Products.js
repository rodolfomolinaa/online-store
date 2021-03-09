import React, { useState, useEffect } from 'react';
import ProductList from '../Products/ProductList/ProductList';
import { Row, Col } from 'react-bootstrap';
import { getProducts } from '../../requests/Product';

function Products() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response = await getProducts();
            setProductList(response);
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let content = <div>Loading...</div>;
    if (!loading) {
        content = <ProductList productsList={productList} />;
    }

    return (
        <Row>
            <Col>{content}</Col>
        </Row>
    );
}

export default Products;
