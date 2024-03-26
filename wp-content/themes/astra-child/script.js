// document.addEventListener('DOMContentLoaded', (event) => {
//     const elements = document.querySelectorAll('.wc-layered-nav-rating a, .widget_layered_nav_filters ul li.chosen a, .woocommerce div.product p.price, .woocommerce div.product span.price, .woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .ast-woo-product-category');
//     elements.forEach(function(element) {
//         element.innerHTML = 'Consultar';
//     });
// });
document.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('.wc-layered-nav-rating a, .widget_layered_nav_filters ul li.chosen a, .woocommerce div.product p.price, .woocommerce div.product span.price, .woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .ast-woo-product-category');
    elements.forEach(function(element) {
        const phoneNumber = "YOUR_PHONE_NUMBER_HERE"; // Asegúrate de reemplazar esto con tu número
        const whatsappLink = document.createElement('a');
        whatsappLink.innerText = 'Consultar';
        whatsappLink.href = `https://wa.me/${phoneNumber}`;
        whatsappLink.target = '_blank';
        // Agrega una clase al enlace
        whatsappLink.classList.add('whatsapp-link-consulta');
        // Limpia el contenido actual y añade el enlace de WhatsApp
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.appendChild(whatsappLink);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("masthead");
    var d = document.querySelector(".ast-theme-transparent-header");
    if (d) {
        window.addEventListener("scroll", function () {
            window.scrollY > 150 ? (e.style.backgroundColor = "#0274be") : (e.style.backgroundColor = "transparent");
        });
    }
});