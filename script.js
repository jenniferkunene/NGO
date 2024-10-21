const bars = document.querySelector(".bars"),
navbar = document.querySelector("#navbar"),
close = document.querySelector(".close");

bars.addEventListener("click", () => {
    navbar.classList.add("active")
})

close.addEventListener("click", () => {
    navbar.classList.remove("active")
})
