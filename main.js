// @ts-ignore
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
