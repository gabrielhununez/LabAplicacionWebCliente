export function RenderizarHeader() {
    let containerDelHeader = document.querySelector(".header");

    let template = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <i class="fa-solid fa-shop"></i>
            ElSalado
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                <a class="nav-link" href="#">Productos</a>
            </div>
            <div>
                <button type="button" class="btn">
                    <i class="fa-solid fa-basket-shopping" style="color: white;"></i>
                    <span style="color: whitesmoke;">Carrito</span>
                </button>
            </div>
        </div>
    </nav>
    `;

    containerDelHeader.innerHTML = template;
}
