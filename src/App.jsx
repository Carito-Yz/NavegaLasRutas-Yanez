import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/error/Error';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div className='app-container'>
          <NavBar />
          
          <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/category/:category' element = {<ItemListContainer/>}/>
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />}></Route>
            <Route path='*' element = {<Error />}></Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
