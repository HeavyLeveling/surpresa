const slides = document.querySelectorAll('.slide');
const bolinhas = document.querySelectorAll('.bolinha');
let indice = 0;

function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    bolinhas.forEach(bola => bola.classList.remove('ativo'));
    slides[i].classList.add('ativo');
    bolinhas[i].classList.add('ativo');
}

function proximoSlide() {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
}

bolinhas.forEach((bola, i) => {
    bola.addEventListener('click', () => {
        indice = i;
        mostrarSlide(indice);
    });
});

setInterval(proximoSlide, 4000); // Troca de slide a cada 4 segundos
