import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className='btn btn-ghost normal-case text-xl'> Bebe a Bordo</Link>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <Link to='/category/banquito'><li className='px-8 '>Banquitos</li></Link>
                            <Link to='/category/cuadro'><li className='px-8 '>Cuadros</li></Link>
                            <Link to='/category/muñeco'><li className='px-8 '>Muñecos</li></Link>
                        </ul>
                    </div>
                </div>
                <Link to='/cart'> <CartWidget/> </Link>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.pinimg.com/736x/58/77/7e/58777e77e7cb1bf10d52e64fbca73c9e.jpg" />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">Home</a>
                            </li>
                            <li><a>Contacto</a></li>
                            <li><a>Sobre Nosotros</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar