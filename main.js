//change nav bar style

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle
    ('window-scroll', window.scrollY>0)
})

//show /hide faq

const faqs =  document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //change icon

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus';
        }else{
            icon.className='uil uil-plus';
        }
    })
})

//show and hide menu

const menu= document.querySelector('.nav__menu');
const menu_button=document.querySelector('#open-menu-btn');
const close_button=document.querySelector('#close-menu-btn');

menu_button.addEventListener('click',()=>{
    menu.style.display='flex';
    close_button.style.display='inline-block';
    menu_button.style.display='none';
})

close_button.addEventListener('click',()=>{
    menu.style.display='none';
    menu_button.style.display='inline-block';
    close_button.style.display='none';
})

const fades = document.querySelectorAll('[data-fadein]');
    function checkLoaded() {
        const w = window.innerHeight;
        const offset = 100;
        for (const dom of fades) {
            const rect = dom.getBoundingClientRect();
            if (rect.y < w - offset) {
                dom.classList.add('active');
            } else {
                if (parseInt(dom.getAttribute('data-once')) !== 1) {
                    dom.classList.remove('active');
                }
            }
        }
    }


    window.addEventListener("load", () => {
        window.setTimeout(() => {
            if (fades.length) {
                checkLoaded();
                window.addEventListener('scroll', () => {
                    checkLoaded()
                });
            }
        }, 500);
    });