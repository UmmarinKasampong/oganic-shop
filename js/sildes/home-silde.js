

var swiper = new Swiper(".cate-slides", {

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 4,

    breakpoints : {

        1000 : {
            slidesPerView: 4,
        } ,

        750 : {
            slidesPerView: 3,
        } ,

        600 : {
            slidesPerView: 2,
        } ,

        0 : {
            slidesPerView: 1,
        } ,
    }
});



        

     // Slldes Show Product status

     var product_slide1 = new Swiper(".last-pro", {

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".latest-swiper-button-next",
            prevEl: ".latest-swiper-button-prev",
        },

    });

    var product_slide2 = new Swiper(".top-pro", {

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".top-swiper-button-next",
            prevEl: ".top-swiper-button-prev",
        },

    });


    var product_slide3 = new Swiper(".review-pro", {

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
        },

    });

