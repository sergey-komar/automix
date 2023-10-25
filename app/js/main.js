$(function () {
    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });


     $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Назад</button>',
        nextArrow: '<button type="button" class="slick-next">Вперёд</button>',
        appendArrows: '.home-slider__arrows'
     })
});


window.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelectorAll('.questions-accardion__img');
    arrows.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('arrow');
        });
    });


//tabs
const tabsItem = document.querySelector('.tabs__item');
const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabsHide(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtn.forEach(btn =>{
        btn.classList.remove('tabs__item-btn--active');
    })
}
function tabsShow(i){
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('tabs__item-btn--active');
}

if(tabsItem){
    tabsItem.addEventListener('click', (e)=>{
        const target = e.target;
        
        if(target && target.classList.contains('tabs__item-btn')){
            tabsItemBtn.forEach((item, i)=>{
                if(target == item){
                    tabsHide();
                    tabsShow(i);
                }
               
            })
           
        }
    })

tabsHide();
tabsShow(0);
}



//menu
const menu = document.querySelector('.aside');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function() {
this.classList.toggle('nav-icon--active')
menu.classList.toggle('nav--active');
});





})