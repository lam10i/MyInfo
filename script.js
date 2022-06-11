const pastSliderBtn = document.getElementById('my-info-body-slider-item-past-btn');
const nextSliderBtn = document.getElementById('my-info-body-slider-item-next-btn');
const sliderItem = document.querySelectorAll('.my-info-body-slider-item-container');
const myInfoBodySliderButton = document.querySelectorAll('.my-info-body-slider-button');
const my_body_content_item=document.querySelectorAll('.my-body-content-item');
const my_info_body_sidebar_item=document.querySelectorAll('.my-info-body-sidebar-item');
const modal_loading=document.querySelector('.modal-loading');
let currentActive=0;

console.log(modal_loading);
//Remove modal loading after a time
setTimeout(function(){
    modal_loading.style.display='none'
},2000)

my_info_body_sidebar_item.forEach(function(item,index){
    item.addEventListener('click',function(){
        const my_info_body_sidebar_itemActive=document.querySelector('.my-info-body-sidebar-item--active');
        my_info_body_sidebar_itemActive.classList.remove('my-info-body-sidebar-item--active');
        item.classList.add('my-info-body-sidebar-item--active');
        const my_body_content_itemActive=document.querySelector('.my-body-content-item--active');
        my_body_content_itemActive.classList.remove('my-body-content-item--active');
        my_body_content_item[index].classList.add('my-body-content-item--active');
    })  
})

const intro_para=document.querySelector('.intro-para');
//Mouse over and mouse out with intro para
intro_para.addEventListener('mouseover',function(){
    intro_para.style.animationPlayState='paused'
})
intro_para.addEventListener('mouseout',function(){
    intro_para.style.animationPlayState='running';
})
//slider for quote
pastSliderBtn.addEventListener('click', function () {
    if (currentActive === 0) {
        currentActive = sliderItem.length - 1;
    }
    else {
        currentActive--;
    }
    sliderItem.forEach(item => {
        item.classList.remove('active');
    })
    myInfoBodySliderButton.forEach(item => {
        item.classList.remove('active');
    })
    sliderItem[currentActive].classList.add('active');
    myInfoBodySliderButton[currentActive].classList.add('active');
    clearInterval(clearSliderInterval);
    clearSliderInterval = setInterval(
        clearSliderIntervalFunction, 4000);
})
nextSliderBtn.addEventListener('click', function () {
    if (currentActive === sliderItem.length - 1) {
        currentActive = 0;
    }
    else {
        currentActive++;
    }
    sliderItem.forEach(item => {
        item.classList.remove('active');
    })
    myInfoBodySliderButton.forEach(item => {
        item.classList.remove('active');
    })
    sliderItem[currentActive].classList.add('active');
    myInfoBodySliderButton[currentActive].classList.add('active');
    clearInterval(clearSliderInterval);
    clearSliderInterval = setInterval(
        clearSliderIntervalFunction, 4000);
})
myInfoBodySliderButton.forEach((item, index) => {
    item.addEventListener('click', function () {
        sliderItem.forEach(item => {
            item.classList.remove('active');
        })
        myInfoBodySliderButton.forEach(item => {
            item.classList.remove('active');
        })
        currentActive = index;
        sliderItem[currentActive].classList.add('active');
        myInfoBodySliderButton[currentActive].classList.add('active');
        clearInterval(clearSliderInterval);
        clearSliderInterval = setInterval(
            clearSliderIntervalFunction, 4000);
    })
})
var clearSliderInterval = setInterval(
    clearSliderIntervalFunction, 4000);
function clearSliderIntervalFunction() {
    sliderItem.forEach(item => {
        item.classList.remove('active');
    })
    myInfoBodySliderButton.forEach(item => {
        item.classList.remove('active');
    })
    if (currentActive === sliderItem.length - 1) {
        currentActive = 0;
    }
    else {
        currentActive++;
    }
    sliderItem[currentActive].classList.add('active');
    myInfoBodySliderButton[currentActive].classList.add('active');
}

