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

//모바일 메뉴
$headEl.addEventListener('click', (e) => {
    if(e.target.matches('.link-in')) {
        $headEl.classList.remove('full')
    }
})
const $mbMenu = document.querySelector('.trigger-btn');
$mbMenu.addEventListener('click', (e) => {
    let target = e.currentTarget;
    target.classList.toggle('on');
    $headEl.classList.toggle('full')
})

//하단 주소 복사
const $addressBtnEls = document.querySelector('.copy-link');
$addressBtnEls.addEventListener('click', function() {
    const valOfDIV = document.querySelector(".addr-text").textContent;
    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = valOfDIV;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('주소 복사 완료')
})