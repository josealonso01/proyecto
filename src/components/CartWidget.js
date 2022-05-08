import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <Link to='/category/:id'><li><a>Artesanias</a></li></Link>
                    <li tabindex="0">
                        <a>
                            Decoracion
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2 bg-base-100">
                            <li><a>Banquitos</a></li>
                            <li><a>Cuadros</a></li>
                        </ul>
                    </li>
                    <li><a>Muñecos</a></li>
                </ul>
            </div>
        </div>

    )
}

export default CartWidget
