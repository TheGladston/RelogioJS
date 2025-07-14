// Elementos da página que representam o visor digital e os ponteiros do relógio
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s'); // ponteiro de segundos
let mElement = document.querySelector('.p_m'); // ponteiro de minutos
let hElement = document.querySelector('.p_h'); // ponteiro de horas

// Função responsável por atualizar o relógio
function updateClock() {
    const now = new Date();

    // Recupera a hora atual
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Garante que sempre teremos dois dígitos para cada valor
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Atualiza o visor digital
    digitalElement.innerHTML = `${hours}:${minutes}:${seconds}`;

    // Calcula e aplica o ângulo de cada ponteiro
    sElement.style.transform = `rotate(${seconds * 6 - 90}deg)`;
    mElement.style.transform = `rotate(${minutes * 6 + seconds / 10 - 90}deg)`;
    hElement.style.transform = `rotate(${hours * 30 + minutes / 2 - 90}deg)`;
}

// Atualiza a cada segundo e executa ao carregar a página
setInterval(updateClock, 1000);
updateClock();
