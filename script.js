let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');
let plant = document.getElementById('plant');
    
let maxScrollValue = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value > maxScrollValue) {
        value = maxScrollValue;
    }

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * -1.5 + 'px';
    // tree.style.top = value * -0.5 + 'px';
    // tree.style.left = value * -2 + 'px';
    
});