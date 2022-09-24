import './App.css';
import { CartProvider } from './context/useContext';
import Router from './router/Router';


function App(props) {


  return (
    <div>
      <CartProvider>
        <Router/>
      </CartProvider>
    </div>
  );
}

export default App;
