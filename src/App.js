import './App.css';
import Layout from './containers/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import About from './components/About/About';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Layout>

  );
}

export default App;
