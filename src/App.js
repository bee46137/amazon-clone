
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';

const App = () => {
  return (
    <div>
      <Route path="/Home">
        <Home/>
      </Route>

      <Route path="/Products">
        <Products/>
      </Route>

    </div>
  );
}

export default App;
