const titles = document.querySelectorAll(".section-title");

window.addEventListener("scroll", () => {
    titles.forEach(title => {
        const position = title.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100) {
            title.classList.add("active");
        }
    });
});