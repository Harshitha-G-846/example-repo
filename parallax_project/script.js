let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let limit = Math.min(window.scrollY, 420);

    text.style.marginTop = limit * 2.5 + 'px';
    leaf.style.top = limit * -1.5 + 'px';
    leaf.style.left = limit * 1.5 + 'px';
    hill5.style.left = limit * 1.5 + 'px';
    hill4.style.left = limit * -1.5 + 'px';
    hill1.style.top = limit * 1.5 + 'px';

});