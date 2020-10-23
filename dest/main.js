let iMenu = document.getElementById('showmenu');
let menu = document.querySelector('header .header__navbar');
let langCurrent = document.querySelector('header .header__lang-current');
let langSelection = document.querySelector('header .header__lang-selection');
let btnCloseMenu = document.querySelector('.btnCloseMenu');
let langSelectionItem = document.querySelector('header .header__lang .header__lang-current .header__lang-selection .section__item')


document.querySelector('header .header__lang-current').addEventListener("click",function(e){
    e.stopPropagation();
    e.preventDefault();
    let selection = document.querySelector('header .header__lang-selection');
    
    if(this.classList.contains('clicked'))
    {
        this.classList.remove('clicked');
        // langSelection.style.display = 'none';
        selection.classList.remove('showlangsection');
    }
    else{
        this.classList.add('clicked');
        // langSelection.style.display = 'block';
        selection.classList.add('showlangsection');
    }
});
/***** MENU RESPONSIVE *****/
document.querySelector('.hamburger').addEventListener("click",function(e){

    e.stopPropagation();
    console.log(this);

    // if(menu.classList.contains('active')){
    //     menu.classList.remove('active');
    // }
    // else{
    //     menu.classList.add('active');
    // }
    menu.classList.toggle('active');
    
});
btnCloseMenu.addEventListener('click',function(e){
    e.stopPropagation();
    menu.classList.toggle('active');
})
document.body.addEventListener('click',function(){
    if(langCurrent.classList.contains('clicked'))
    {
        langCurrent.classList.remove('clicked');
        // langSelection.style.display = 'none';
        langSelection.classList.remove('showlangsection');
    }
    if(menu.classList.contains('active'))
    {
        menu.classList.remove('active');
    }
    console.log(2)
});



const sectionitem = document.querySelectorAll('header .container-fluid .header__lang .header__lang-current .header__lang-selection .section__item');
sectionitem.forEach(function(i)
{
    const item = i.querySelector('span');
    const textLangcurrent = document.querySelector('header .container-fluid .header__lang .header__lang-current a');
    item.addEventListener('click',function(){
        textLangcurrent.innerText = item.innerText;
    });
})

var lastScrollTop = 0;
const header = document.querySelector('header');
const slider = document.querySelector('main .slider');
const sliderbottom = document.querySelector('main .slider .slider__bottom');
window.addEventListener('scroll',function(){
    let scrollTop = document.querySelector('html').scrollTop;
    if(scrollTop < (slider.offsetHeight - sliderbottom.offsetHeight*3))
    {
            header.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else
    {
        header.style.backgroundColor = 'black';
    }
    if(scrollTop > lastScrollTop)
    {
        header.style.transform = "translateY(-100%)";
    }
    else
    {
        header.style.transform = "translateY(0%)";
    }
    lastScrollTop = scrollTop;
})

const backToTop = document.querySelector('footer .container a');
backToTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollBy({
        top: -(document.querySelector('main').offsetHeight + document.querySelector('footer').offsetHeight +
        document.querySelector('header').offsetHeight),
        behavior:'smooth'
    });
});

//slider
let sliderCurrent = 0;
const slideritems = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.control .prev-btn');
const nextBtn = document.querySelector('.control .next-btn');
const sliderNumber = document.querySelector('main .slider .slider__bottom .container-fluid .paging .number');
const dotSlider =  document.querySelectorAll('main .slider .slider__bottom .container-fluid .paging .dot ul li');
prevBtn.addEventListener('click',function(e){
    e.preventDefault();
    sliderCurrent--;
    if(sliderCurrent >= 0)
    {
        slideritems[sliderCurrent+1].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[sliderCurrent+1].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
    else
    {
        sliderCurrent = slideritems.length-1;
        slideritems[0].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[0].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
});

nextBtn.addEventListener('click',function(e){
    e.preventDefault();
    sliderCurrent++;
    if(sliderCurrent < slideritems.length)
    {
        slideritems[sliderCurrent-1].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[sliderCurrent-1].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
    else{
        sliderCurrent = 0;
        slideritems[slideritems.length-1].classList.remove('active');
        slideritems[sliderCurrent].classList.add('active');
        sliderNumber.innerText = (sliderCurrent+1).toString().padStart(2,'0');
        dotSlider[slideritems.length-1].classList.remove('active');
        dotSlider[sliderCurrent].classList.add('active');
    }
});





