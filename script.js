


const RedireccionarARegistro = () => {
    window.location.href = "register.html"
}


const DireccionarABeneficios = () => {
    scrollToSection("seccionBeneficios")
}

const DireccionarAFooter = () => {
    scrollToSection("footer")
}

const DireccionarAMenu = () => {
    scrollToSection("menuHamburguesas")
}

function scrollToSection(sección) {
    const section = document.getElementById(sección); // Obtener la referencia a la sección
    section.scrollIntoView({ behavior: "smooth" }); // Realizar un desplazamiento suave hacia la sección
}


