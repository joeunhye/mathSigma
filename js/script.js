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
    navigate();

    if(scrollH > 100) {
        $topBtn?.classList.add('fade-in')
    }else {
        $topBtn?.classList.remove('fade-in')
    }
})

//TOP MOVE BTN
const $topBtn = document.querySelector('.top-btn');
$topBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
})

window.addEventListener('load', () =>  {
    document.querySelector('body').classList.add('active-section1')
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

const $sections = document.querySelectorAll('section')
function navigate() {
    $sections.forEach(($section, i) => {
        if (scrollH >= $section.offsetTop - (window.innerHeight / 2)) {
            document.querySelector('body').className = "";
            document.querySelector('body').classList.add(`active-section${i + 1}`)
        }
    })
}

