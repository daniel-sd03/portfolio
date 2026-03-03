//SOBREPOSIÇÃO PORTFOLIO
function abrirModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.classList.add("no-scroll");
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.classList.remove("no-scroll"); 
}

document.addEventListener("DOMContentLoaded", function () {
    // MENU MOBILE
    let btnMenu = document.getElementById('btn-menu')
    let menu = document.getElementById('menu-mobile')
    let overlay = document.getElementById('overlay-menu')

    if (btnMenu && menu && overlay) {
        btnMenu.addEventListener('click', () => {
            menu.classList.add('abrir-menu')
        })

        menu.addEventListener('click', () => {
            menu.classList.remove('abrir-menu')
        })

        overlay.addEventListener('click', () => {
            menu.classList.remove('abrir-menu')
        })
    }

    // EMAILJS
    emailjs.init("nJaZGrwAEw4cEsu4w");

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.send("service_getvcs9", "template_o85ql48", {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                celular: document.getElementById("celular").value,
                mensagem: document.getElementById("textarea").value
            })
                .then(function () {
                    alert("Mensagem enviada com sucesso!");
                    form.reset();
                })
                .catch(function (error) {
                    alert("Erro ao enviar. Tente novamente.");
                    console.log(error);
                });
        });
    }

});