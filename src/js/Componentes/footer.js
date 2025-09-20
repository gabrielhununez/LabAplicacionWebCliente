export function RenderizarFooter() {
    let footer = document.querySelector(".footer");
    let template = `
        <section class="container text-center">
            <span class="text-muted text-white">©2025 ElSalado. Todos los derechos reservados.</span>
        </section>
    `;
    footer.innerHTML = template;
}
