// Abre el diálo cargar la página y bloquea el scroll
window.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('body-modal-abierto');
    document.getElementById('musica-dialog').showModal();
});

let musicaReproducida = false;

function forzarPlayMusica() {
    const audio = document.getElementById('musica-fondo');
    if (!musicaReproducida && audio) {
        audio.play().then(() => {
            musicaReproducida = true;
        }).catch(() => { });
    }
}

document.getElementById('aceptar-musica').addEventListener('click', function () {
    document.getElementById('musica-dialog').close();
    document.body.classList.remove('body-modal-abierto');
    forzarPlayMusica();
});