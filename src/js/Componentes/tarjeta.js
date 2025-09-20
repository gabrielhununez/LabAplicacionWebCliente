import { ObtenerProductos } from "../api.js";
import { RenderizarModal } from "./modal.js";

export function RenderizarTarjetas() {
    let listaDeProductos = document.querySelector("#lista-de-productos");
    
    ObtenerProductos().then((productos) => {
        let template = "";
        
        productos.forEach(producto => {
            template += `
            <div class="col mb-4">
                <div class="card justify-content-center align-items-center rounded" style="width: 300px;">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}" style="height: 300px; width: 250px; object-fit: cover;">
                    <div class="card-body" style="width: 300px;">
                        <h5 class="card-title text-truncate">${producto.title}</h5>
                    </div>
                    <div class="mb-3">
                        <button type="button" class="btn btn-dark" id="btn-${producto.id}">Más detalles!</button>
                    </div>
                </div>
            </div>`;
        });

        listaDeProductos.innerHTML = template;

        productos.forEach((producto) => {
            let botonParaMostrarElModal = document.querySelector(`#btn-${producto.id}`);
            botonParaMostrarElModal.addEventListener("click", () => {
                RenderizarModal(producto);
            });
        });
    });
}