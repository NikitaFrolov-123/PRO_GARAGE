document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true, 
        autoplay: {
            delay: 2000, 
            disableOnInteraction: false,
        },
        slidesPerView: 10, 
        spaceBetween: 10, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }})})