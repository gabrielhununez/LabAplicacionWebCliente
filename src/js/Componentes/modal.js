export function RenderizarModal(producto) {
    let contenedorDelModal = document.querySelector("#modal-de-producto");

    let template = ` 
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${producto.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="${producto.image}" alt="${producto.title}" style="width: 100%;">
                <p>${producto.description}</p>
                <p>Precio: ${producto.price}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Agregar al Carrito</button>
            </div>
        </div>
    </div>
    `;

    contenedorDelModal.innerHTML = template;

    const bootstrapModal = new bootstrap.Modal(contenedorDelModal);
    bootstrapModal.show();
}
