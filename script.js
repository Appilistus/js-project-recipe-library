const btns = document.querySelectorAll(".filter-btn, .sort-btn");
const container = document.getElementById("text-container");

btns.forEach((btn) => {
    // change the color of the button when it's clicked
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    })
})

// btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const targetID = btn.textContent.trim().toLowerCase();
//         const template = document.querySelector(`#templates #${targetID}`);

//         if (template) {
//             const clone = template.cloneNode(true);
//             container.appendChild(clone);
//         }
//     });
// });

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const textContainer = document.querySelector("#text-container");
            if (btn.textContent.trim() === "All") {
                const p = document.createElement("p");
                p.textContent = "You eat everything, maybe liver then?";
                textContainer.appendChild(p);
            }

            if (btn.textContent.trim() === "Italy") {
                const p = document.createElement("p");
                p.textContent = "Are you a pasta or a pizza person?";
                textContainer.appendChild(p)
            }

            if (btn.textContent.trim() === "USA") {
                const p = document.createElement("p");
                p.textContent = "Cranberry sauce?";
                textContainer.appendChild(p);
            }

            if (btn.textContent.trim() === "China") {
                const p = document.createElement("p");
                p.textContent = "You chose Chinese";
                textContainer.appendChild(p);
            }

            if (btn.textContent.trim() === "Descending") {
                const p = document.createElement("p");
                p.textContent = "You ar in a hurry mate?";
                textContainer.appendChild(p);
            }

            if (btn.textContent.trim() === "Ascending") {
                const p =document.createElement("p");
                p.textContent = "You want to impress on someone?";
                textContainer.appendChild(p);
            }


    });
});
