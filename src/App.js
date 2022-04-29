import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { CartWidget } from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Items from './components/Items';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='TIENDA ONLINE'/>
      <Items/>
    </>
  );
}
export default App;

