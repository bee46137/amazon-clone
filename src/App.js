
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Header from './Components/Layout/Header';
import ProductDetails from './Components/Layout/ProductDetails';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path={"/"} exact >
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home">
            <Home/>
          </Route>

          <Route path="/Products" exact>
            <Products/>
          </Route>

          <Route path="/Products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
      
    </div>
  );
};

export default App;
