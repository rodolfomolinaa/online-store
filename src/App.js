import './App.css';
import Layout from './containers/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

import Products from './containers/Products/Products';
import ProductDetail from './containers/Products/ProductDetail/ProductDetail';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import Receipt from './components/ShoppingCart/Receipt/Receipt';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/product/:productId"
                    component={ProductDetail}
                />
                <Route exact path="/shopping-cart" component={ShoppingCart} />
                <Route exact path="/purchase/:purchaseId" component={Receipt} />
                <Route exact path="/" component={Products} />
                <Route parth="*" component={NotFound} />
            </Switch>
        </Layout>
    );
}

export default App;
