import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {

  return (
    <div className='app-container'>
      <NavBar />
      <ItemListContainer saludo = "Bienvenido a mi E-Commerce" />
    </div>
  )
}

export default App
