import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <Link to='/' class='btn btn-ghost normal-case text-xl'> Bebe a Bordo</Link>
                    <div class="flex-none">
                        <ul class="menu menu-horizontal p-0">
                            <Link to='/category/banquito'><li><a>Banquitos</a></li></Link>
                            <Link to='/category/cuadro'><li><a>Cuadros</a></li></Link>
                            <Link to='/category/muñeco'><li><a>Muñecos</a></li></Link>
                        </ul>
                    </div>
                </div>
                <Link to='/cart'> <CartWidget/> </Link>
                <div class="flex-none">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://i.pinimg.com/736x/58/77/7e/58777e77e7cb1bf10d52e64fbca73c9e.jpg" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">Home</a>
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