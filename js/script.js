const lampada = document.getElementById('lampada');

function ligar() {
    lampada.setAttribute('src', './imagens/lamp-on.png');
}
function desligar() {
    lampada.setAttribute('src', './imagens/lamp-off.png');
}