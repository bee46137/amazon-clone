
import './App.css';
import React, { useEffect, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Header from './Components/Layout/Header';
import ProductDetails from './Components/Layout/ProductDetails';
import ReturnsAndOrders from './Components/ReturnsAndOrders';
import Login from './Components/Login';
import NotFound from "./Components/NotFound";
import { auth } from './firebase';
import ShoppingContext from './context/shopping/shoppingContext';
// import CheckoutProduct from './Components/CheckoutProduct';
import Checkout from './Components/Checkout';



const App = () => {

  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if(authUser){
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
  }, []);

  return (
    <>
      <Header/>
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

          <Route path="/Checkout">
            <Checkout />
          </Route>

          <Route path="/Login">
            <Login/>
          </Route>

          <Route path="/ReturnsAndOrders">
            <ReturnsAndOrders />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </main>
      
    </>
  );
};

export default App;
