let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header .navbar');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav [href*=' + id + ']').classList.add('active');

            });

        };
    
    });

};

const bars = document.querySelector(".bars"),
navbar = document.querySelector("#navbar"),
close = document.querySelector(".close");

bars.addEventListener("click", () => {
    navbar.classList.add("active")
})

close.addEventListener("click", () => {
    navbar.classList.remove("active")
})

// animation

gsap.to(".notification-bar p, .notification-bar span, .notification-bar a", {
    opacity: 1,
    y: 0,
    duration: .1
})

gsap.to("#navbar .logo, #navbar ul, #navbar .bars", {
    opacity: 1,
    y: 0,
    duration: .5,
    delay: .4
})

gsap.to(".resources-and-review", {
    opacity: 1,
    y: 0,
    duration: .5,
    scrollTrigger: {
        trigger: ".resources-and-review",
        start: "top 70%",
    }
})

gsap.to(".home .text, .home .image", {
    opacity: 1,
    y: 0,
    duration: .5,
    delay: .8,
    stagger: .7
})

