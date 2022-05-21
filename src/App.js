import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import CartContextProvider, { CartContext } from './context/CartContextProvider';
import CartPage from './pages/CartPage';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/' element={<ListPage/>}/>
        <Route path='/category/:category' element={<ListPage/>}/>
        <Route path='/item/:id' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}
export default App;

