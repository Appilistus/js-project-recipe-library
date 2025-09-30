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

const recipes = [
    {
    id: 1,
    title: "Cheat's cheesy Focaccia",
    image: "image/focaccia.jpg",
    readyInMinutes: 40,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Italian",
    ingredients: [
        "500 pack bread mix",
        "2 tbsp. olive oil, plus a little extra for drizzling",
        "25g parmesan (or vegetarian alternative), grated",
        "75g dolcelatte cheese (or vegetarian alternative)",
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 2,
    title: "Burnt-Scallion Fish",
    image: "image/fish.jpg",
    readyInMinutes: 70,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Chinese",
    ingredients: [
        "2 bunches scallions",
        "8 tbsp. butter",
        "2 8-oz. fish filets",
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 3,
    title: "Backed Chicken",
    image: "image/chicken.jpg",
    readyInMinutes: 90,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "American",
    ingredients: [
        "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
        "1/2 tsp. coarse salt",
        "1/2 tsp. Mrs. Dash seasoning",
        "1/4 tsp. freshly ground black pepper",
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 4,
    title: "Deep Fried Fish Bones",
    image: "image/deep fry.jpg",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "South-East Asia",
    ingredients: [
        "8 small whiting fish or smelt",
        "4 cups vegetable oil",
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 5,
    title: "Vegetarian Pesto Pasta",
    image: "image/fish.jpg",
    readyInMinutes: 25,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Italian",
    ingredients: [
        "pasta",
        "basil",
        "parmesan cheese",
        "garlic",
        "pine nuts",
        "olive oil",
        "salt",
        "black pepper",
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 6,
    title: "Dairy-Free Tacos",
    image: "image/chicken.jpg",
    readyInMinutes: 15,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mexican",
    ingredients: [
        "corn tortillas",
        "ground beef",
        "taco seasoning",
        "lettuce",
        "tomato",
        "avocado",
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
    {
    id: 7,
    title: "Beef Stew",
    image: "image/deep fry.jpg",
    readyInMinutes: 90,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "European",
    ingredients: [
        "beef chunks",
        "potatoes",
        "carrots",
        "onion",
        "garlic",
        "tomato paste",
        "beef broth",
        "red wine",
        "bay leaves",
        "thyme",
        "salt",
        "black pepper",
        "flour",
        "celery",
        "mushrooms",
    ],
    pricePerServing: 2.5,
    popularity: 85
    },
]

const container = document.querySelector(".recipe-container")

//===============================
// display recipes
//===============================

const displayRecipes = (recipeArray) => {
    container.innerHTML = "" //reset the container

    recipeArray.forEach(recipe => {
        container.innerHTML += `
        <div class="recipe-card">
            <p>${recipe.title}</p>
            <img src="${recipe.image}" alt= "picture of food"/>
        </div>
        `
    })
}

displayRecipes(recipes);

//===============================
// filter recipes
//===============================

const italyBtn = document.getElementById("italy")
const usaBtn = document.getElementById("usa")
const chinaBtn = document.getElementById("china")
const europeanBtn = document.getElementById("european")
const mexicanBtn = document.getElementById("mexican")

allBtn.addEventListener("click", () => {
    displayRecipes(recipes);
})

italyBtn.addEventListener("click", () => {
    const italianRecipes = recipes.filter((recipe) =>
    recipe.cuisine.includes("Italian")
    )
    displayRecipes(italianRecipes)
})

usaBtn.addEventListener("click", () => {
    const usaRecipes = recipes.filter((recipe) =>
    recipe.cuisine.includes("American")
    )
    displayRecipes(usaRecipes)
})

chinaBtn.addEventListener("click", () => {
    const chinaRecipes = recipes.filter((recipe) =>
    recipe.cuisine.includes("Chinese")
    )
    displayRecipes(chinaRecipes)
})

europeanBtn.addEventListener("click", () => {
    const europeanRecipes = recipes.filter((recipe) =>
    recipe.cuisine.includes("European")
    )
    displayRecipes(europeanRecipes)
})

mexicanBtn.addEventListener("click", () => {
    const mexicanRecipes = recipes.filter((recipe) =>
    recipe.cuisine.includes("Mexican")
    )
    displayRecipes(mexicanRecipes)
})

//===============================
// sort recipes
//===============================

const discBtn = getElementById("disc")
const ascBtn = getElementById("asc")



//===============================
// pic a random recipe
//===============================






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
