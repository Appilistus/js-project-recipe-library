const allBtn = document.getElementById("all")
const filterBtn = document.querySelectorAll(".filter-btn")
const defaultSortBtn = document.getElementById("disc")
const sortBtn = document.querySelectorAll(".sort-btn")
const randomBtn = document.querySelector(".random-button")

allBtn.classList.add("active") //default select
defaultSortBtn.classList.add("active")//default select

//===============================
// filter buttons
//===============================

filterBtn.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {

        // only "all" button will be active when it is clicked
        if (filterButton.id === "all") {
            filterBtn.forEach(btn => btn.classList.remove("active"));
            allBtn.classList.add("active")
        } else {
        // when other filter buttons are clicked
            filterButton.classList.toggle("active");

            const anyActive = [...filterBtn].some(
                btn => btn !== allBtn && btn.classList.contains("active")
            );
            if (anyActive) {
            // when buttons other than all are active, remove "active"
                allBtn.classList.remove("active");
            } else {
            // put "active" back, when other buttons are not active
                allBtn.classList.add("active")
            }
        }
    });
});

//===============================
// sort buttons - only one button can be selected
//===============================

sortBtn.forEach(sortButton => {
    sortButton.addEventListener("click", () => {
        sortBtn.forEach(btn => btn.classList.remove("active"));
        sortButton.classList.add("active");
    });
});


//===============================
// recipes
//===============================

const recepis = [
    {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
        "red lentils",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "cumin",
        "paprika",
        "vegetable broth",
        "olive oil",
        "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 2,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
        "red lentils",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "cumin",
        "paprika",
        "vegetable broth",
        "olive oil",
        "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 3,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
        "red lentils",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "cumin",
        "paprika",
        "vegetable broth",
        "olive oil",
        "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 4,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
        "red lentils",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "cumin",
        "paprika",
        "vegetable broth",
        "olive oil",
        "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 5,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
        "red lentils",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "cumin",
        "paprika",
        "vegetable broth",
        "olive oil",
        "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 6,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
        "red lentils",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "cumin",
        "paprika",
        "vegetable broth",
        "olive oil",
        "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 7,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
        "red lentils",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "cumin",
        "paprika",
        "vegetable broth",
        "olive oil",
        "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
]

// old JS below ===========================================================

// const btns = document.querySelectorAll(".filter-btn, .sort-btn, .random-btn");
// const container = document.getElementById("text-container");

// btns.forEach((btn) => {
//     // change the color of the button when it's clicked
//     btn.addEventListener("click", () => {
//         btn.classList.toggle("active");
//     })
// })

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

// btns.forEach((btn) => {
//     // add click event on each button
//     btn.addEventListener("click", () => {
//         // add text in HTML
//         const textContainer = document.querySelector("#text-container");
//             if (btn.textContent.trim() === "All") {
//                 // create p tag
//                 const p = document.createElement("p");
//                 // put text in p
//                 p.textContent = "You eat everything, maybe liver then?";
//                 // add p in #text-container
//                 textContainer.appendChild(p);
//             }

//             if (btn.textContent.trim() === "Italy") {
//                 const p = document.createElement("p");
//                 p.textContent = "Are you a pasta or a pizza person?";
//                 textContainer.appendChild(p)
//             }

//             if (btn.textContent.trim() === "USA") {
//                 const p = document.createElement("p");
//                 p.textContent = "Cranberry sauce?";
//                 textContainer.appendChild(p);
//             }

//             if (btn.textContent.trim() === "China") {
//                 const p = document.createElement("p");
//                 p.textContent = "You chose Chinese";
//                 textContainer.appendChild(p);
//             }

//             if (btn.textContent.trim() === "Descending") {
//                 const p = document.createElement("p");
//                 p.textContent = "You ar in a hurry mate?";
//                 textContainer.appendChild(p);
//             }

//             if (btn.textContent.trim() === "Ascending") {
//                 const p =document.createElement("p");
//                 p.textContent = "You want to impress on someone?";
//                 textContainer.appendChild(p);
//             }


//     });
// });
