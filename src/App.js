import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { CartWidget } from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';


function App() {
  return (
    <>
      <NavBar/>
      <Item greeting='TIENDA ONLINE'/>
      <ItemListContainer/>
    </>
  );
}
export default App;

