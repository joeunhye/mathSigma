let winW;
let scrollH;
const headEl = document.querySelector('header');


// Header change
function changeHead() {
    if(scrollH > 100) {
        headEl.classList.add('on')
    }else {
        headEl.classList.remove('on')
    }
}

//Window Size, Scroll height check
function size() {
    scrollH = window.pageYOffset;
}

window.addEventListener('scroll', ()=> {
    size();
    changeHead();
})