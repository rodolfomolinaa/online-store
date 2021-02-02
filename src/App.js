import './App.css';
import Layout from './containers/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import ProductDetails from './containers/ProductDetail/ProductDetail';
import About from './components/About/About';

function App() {
  return (
    <Layout>
      <Switch>
        {/* <Route exact path="/products" component={Products} /> */}
        <Route exact path="/product/:productId" component={ProductDetails} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
