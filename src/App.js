import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ListPage/>}/>
        <Route path='/category/:category?' element={<ListPage/>}/>
        <Route path='/item/:id' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

