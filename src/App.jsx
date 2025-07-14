import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='app-container'>
        <NavBar />
        
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/category/:category' element = {<ItemListContainer/>}/>
          <Route path='/detail/:idProduct' element={<ItemDetailContainer />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
