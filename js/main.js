const header = document.querySelector("header");
const header_img = document.querySelectorAll("header img");
const header_gradient = document.querySelector("header .header_gradient");
const header_filler = document.querySelector("header .header_filler");

const section_text = document.querySelectorAll("section h2");

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.scrollHeight - window.innerHeight));

    checkAllSliders();
});


const hero_text = document.querySelector("#hero_text");
header.addEventListener('mousemove', (e) => {
    let xAxis = (e.pageX - window.innerWidth / 2) / 50;
    let yAxis = (e.pageY - window.innerHeight / 2) / 50;

    hero_text.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


const sliders = document.querySelectorAll('.slide-in');

function checkAllSliders() {
    sliders.forEach(slider => {
        var rect = slider.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        var toggle = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        toggle ? slider.classList.add('active') : slider.classList.remove('active');
    })
}