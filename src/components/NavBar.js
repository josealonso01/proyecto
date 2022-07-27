import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/category/banquito">
                <li className="px-8 ">Banquitos</li>
              </Link>
            </li>
            <li tabindex="0">
              <Link to="/category/cuadro">
                <li className="px-8 ">Cuadros</li>
              </Link>
            </li>
            <li>
              <Link to="/category/muñeco">
                <li className="px-8 ">Muñecos</li>
              </Link>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {' '}
            Bebe a Bordo
          </Link>
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/category/banquito">
              <li className="px-8 ">Banquitos</li>
            </Link>
          </li>
          <li tabindex="0">
            <Link to="/category/cuadro">
              <li className="px-8 ">Cuadros</li>
            </Link>
          </li>
          <li>
            <Link to="/category/muñeco">
              <li className="px-8 ">Muñecos</li>
            </Link>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <Link to="/cart">
          {' '}
          <CartWidget />{' '}
        </Link>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="https://i.pinimg.com/736x/58/77/7e/58777e77e7cb1bf10d52e64fbca73c9e.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

/* <div>
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
        </div> */
