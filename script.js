const btns = document.querySelectorAll(".filter-btn, .sort-btn");
const container = document.getElementById("text-container");

btns.forEach((btn) => {
    // change the color of the button when it's clicked
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    })
})