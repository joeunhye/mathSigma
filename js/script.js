let winW;
let scrollH;
const $headEl = document.querySelector('header');


// Header change
function changeHead() {
    if(scrollH > 100) {
        $headEl.classList.add('on')
    }else {
        $headEl.classList.remove('on')
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

//주요기능 클릭 시 두 번째 섹션으로 이동
const $anchorBtn = document.querySelector('.anchor');
$anchorBtn.addEventListener('click', () => {
    document.querySelector('.sec02').scrollIntoView({ behavior: 'smooth' });
})