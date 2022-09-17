

$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {


            responsive: {
                loop: true,

                // breakpoint from 0 up
                0: {
                    items: 2,
                    margin: 32,
                    dots: false,
                    loop: true,

                },
                // breakpoint from 480 up
                601: {
                    items: 3,
                    dots: false,
                    margin: 32,
                    loop: true,

                },
                // breakpoint from 768 up
                1001: {
                    items: 3,
                    margin: 48,
                    loop: true,

                    dots: false,

                }
            }
        }
    );
});

// Video
const videoButton = document.querySelector('#video-btn')
const videoImg = document.querySelector('.video__img')
const overlay = document.querySelector('.video')
const video = document.querySelector('.video__obj')


overlay.addEventListener('click', function () {
    if (video.paused) {
        videoImg.classList.add('hidden');
        overlay.classList.remove('video-overlay');
        videoButton.classList.add('none')
        video.play()
    }
    else {
        overlay.classList.add('video-overlay');
        videoButton.classList.remove('none')
        video.pause()
    }
})



// Mobile Nav
const openMobileNav = document.querySelector('#open-burger')
const closeMobileNav = document.querySelector('#closeMobileNav')
const mobileNav = document.querySelector('.mobile-nav')

openMobileNav.onclick = function () {
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll')
}

closeMobileNav.onclick = function () {
    mobileNav.classList.add('none')
    document.body.classList.remove('no-scroll')

}