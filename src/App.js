import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { CartWidget } from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';


function App() {
  return (
    <>
      <NavBar/>
      <Item greeting='TIENDA ONLINE'/>
      <ItemListContainer/>
      <ItemDetailContainer id={1} />
    </>
  );
}
export default App;

