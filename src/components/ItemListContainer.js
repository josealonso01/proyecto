const ItemListContainer = ({ greeting }) => {
    return (
        <div class="hero min-h-screen bg-base-200">
            {greeting}
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/120/394/products/crochet_logo-031-434606d56923d69acb15971185541473-1024-1024.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Bienvenidos</h1>
                    <p class="py-6">Nosotros somos un emprendimiento dedicado a hacer cosas al crochet para bebes, todo confeccionado 100% a mano y con mucho amor</p>
                    <button class="btn btn-primary">Ingresa a la tienda</button>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer