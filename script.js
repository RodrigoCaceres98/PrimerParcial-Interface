


const RedireccionarARegistro = () => {
    window.location.href = "register.html"
}


const DireccionarABeneficios = () => {
    console.log("entro a la funcion beneficios")
    const section = document.getElementById("seccionBeneficios"); // Obtener la referencia a la sección
    section.scrollIntoView({ behavior: "smooth" }); // Realizar un desplazamiento suave hacia la sección
    // scrollToSection("seccionBeneficios")
}

const DireccionarAMenu = () => {
    console.log("entro a la funcion menu")
    const section = document.getElementById("menuHamburguesas"); // Obtener la referencia a la sección
    section.scrollIntoView({ behavior: "smooth" }); // Realizar un desplazamiento suave hacia la sección

    // scrollToSection("menuHamburguesas")
}

function scrollToSection(sección) {
    const section = document.getElementById(sección); // Obtener la referencia a la sección
    section.scrollIntoView({ behavior: "smooth" }); // Realizar un desplazamiento suave hacia la sección
}

// const CambiarDeModo = () => {
//     CambiarDeModoOscuroAClaroODeOscuroAClaro();
//     cambiarColorDeHeader();
// }


// const CambiarDeModoOscuroAClaroODeOscuroAClaro = () => {

//     const tieneBlanco = document.querySelector('body').classList.contains('claro')
//     if (tieneBlanco) {
//         document.querySelector('body').classList.remove('claro')
//         document.querySelector('body').classList.add('oscuro')
//         document.querySelector('p').classList.add('letraClara')
//     }
//     else {
//         document.querySelector('body').classList.remove('oscuro')
//         document.querySelector('body').classList.add('claro')
//         document.querySelector('p').classList.add('letraOscura')
//     }
// }

