// change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

//on click show question-answers
const ans = document.querySelectorAll('.question');

ans.forEach(Qans=>{ //for traversing each element
    Qans.addEventListener('click',()=>{
        Qans.classList.toggle('open'); //toggle means adding or removing className from Element
        const changeIcon = document.querySelector('.faq_icon i');
       
            if(changeIcon.className === 'fa-solid fa-plus'){
                changeIcon.className='fa-solid fa-minus';
            }else{
                changeIcon.className = 'fa-solid fa-plus';
            }
        })      
})

//Fn for swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween:10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });




