import './App.css';
import Layout from './containers/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

import Products from './containers/Products/Products';
import ProductDetail from './containers/Products/ProductDetail/ProductDetail';
import About from './components/About/About';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';

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
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Products} />
            </Switch>
        </Layout>
    );
}

export default App;
