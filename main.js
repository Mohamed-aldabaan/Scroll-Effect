let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boot = document.getElementById('boot');
let hallo = document.querySelector('.hallo');

window.onscroll = function () {
    let value = window.scrollY;

    stars.style.top = value / 2 + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boot.style.top = value + 'px';
    boot.style.left = value * 2 + 'px';
    hallo.style.fontSize = value + 'px';
    if(scrollY >= 70){
        hallo.style.fontSize = 70 + 'px';
        hallo.style.position = 'fixed';
        if(scrollY >= 457){
            hallo.style.display = 'none';
        } else {
            hallo.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#2c4659, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
}