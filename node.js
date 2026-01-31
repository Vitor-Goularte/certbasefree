function atualizarTamanhoTela() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    document.getElementById("tamanhoTela").innerText =
    "Largura: " + largura + "px | Altura: " + altura + "px";
}

  // mostra ao carregar
  atualizarTamanhoTela();

  // atualiza ao redimensionar
  window.addEventListener("resize", atualizarTamanhoTela);

var tl = gsap.timeline()

tl.from("h1",{
    y:100,
    opacity:0.1,
    duration:1.2,
})

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	effects: true, // looks for data-speed and data-lag attributes on elements
	smoothTouch: 3 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});



// Transition

import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup();