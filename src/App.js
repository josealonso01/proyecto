import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { CartWidget } from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting='BEBE A BORDO WEBSITE'></ItemListContainer>
    </>
  );
}
export default App;

