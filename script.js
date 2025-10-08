// const URL = "https://api.spoonacular.com/recipes/random?number=10&apiKey=e1711b2ca9f84dec882725da3bd3acfd&cuisine=italian,american,chinese,european,mexican";

const allBtn = document.getElementById("all")
const filterBtn = document.querySelectorAll(".filter-btn")

const sortBtn = document.querySelectorAll(".sort-btn")
const descBtn = document.getElementById("desc")
const ascBtn = document.getElementById("asc")

const randomBtn = document.querySelector(".random-btn")

const container = document.getElementById("recipe-container")

allBtn.classList.add("active") //default select

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
// random buttons - change the color when clicked
//===============================

randomBtn.addEventListener("click", () => {
    randomBtn.classList.toggle("active");
})

//===============================
// recipes
//===============================

// const recipes = [
//     {
//     id: 1,
//     title: "Cheat's cheesy Focaccia",
//     image: "image/focaccia.jpg",
//     readyInMinutes: 40,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "Italian",
//     ingredients: [
//         "500 pack bread mix",
//         "2 tbsp. olive oil, plus a little extra for drizzling",
//         "25g parmesan (or vegetarian alternative), grated",
//         "75g dolcelatte cheese (or vegetarian alternative)",
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//     },
//     {
//     id: 2,
//     title: "Burnt-Scallion Fish",
//     image: "image/fish.jpg",
//     readyInMinutes: 70,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "Chinese",
//     ingredients: [
//         "2 bunches scallions",
//         "8 tbsp. butter",
//         "2 8-oz. fish filets",
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//     },
//     {
//     id: 3,
//     title: "Backed Chicken",
//     image: "image/chicken.jpg",
//     readyInMinutes: 90,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "American",
//     ingredients: [
//         "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
//         "1/2 tsp. coarse salt",
//         "1/2 tsp. Mrs. Dash seasoning",
//         "1/4 tsp. freshly ground black pepper",
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//     },
//     {
//     id: 4,
//     title: "Deep Fried Fish Bones",
//     image: "image/deep fry.jpg",
//     readyInMinutes: 30,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "South-East Asia",
//     ingredients: [
//         "8 small whiting fish or smelt",
//         "4 cups vegetable oil",
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//     },
//     {
//     id: 5,
//     title: "Vegetarian Pesto Pasta",
//     image: "image/fish.jpg",
//     readyInMinutes: 25,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "Italian",
//     ingredients: [
//         "pasta",
//         "basil",
//         "parmesan cheese",
//         "garlic",
//         "pine nuts",
//         "olive oil",
//         "salt",
//         "black pepper",
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//     },
//     {
//     id: 6,
//     title: "Dairy-Free Tacos",
//     image: "image/chicken.jpg",
//     readyInMinutes: 15,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "Mexican",
//     ingredients: [
//         "corn tortillas",
//         "ground beef",
//         "taco seasoning",
//         "lettuce",
//         "tomato",
//         "avocado",
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//     },
//     {
//     id: 7,
//     title: "Beef Stew",
//     image: "image/deep fry.jpg",
//     readyInMinutes: 90,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "European",
//     ingredients: [
//         "beef chunks",
//         "potatoes",
//         "carrots",
//         "onion",
//         "garlic",
//         "tomato paste",
//         "beef broth",
//         "red wine",
//         "bay leaves",
//         "thyme",
//         "salt",
//         "black pepper",
//         "flour",
//         "celery",
//         "mushrooms",
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//     },
// ]

//===============================
// fetch recipes
//===============================

// let recipes = [];

// const fetchData = async () => {
//     try {
//         const response = await fetch(URL);
//         const data = await response.json();
//         console.log("API response:", data);

//         if (data.recipes && Array.isArray(data.recipes)) {
//             recipes = data.recipes;
//             displayRecipes(data.recipes);
//         } else {
//             container.innerHTML = "<p>No recipes found. Check your API key or quota.</p>";
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         container.innerHTML = "<p>Failed to load recipes. Please try again later.</p>";
//     }
// };

// ------------import backup data-----------------------------------------

// Global backup data variable
import { backupRecipes } from "./backup.js"

// Global backup data variable
console.log("backup data loaded", backupRecipes);

let recipes = []; 

const fetchData = async () => {
    try {
        recipes = backupRecipes.recipes;
        displayRecipes(recipes);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchData();

//===============================
// display recipes
//===============================

const displayRecipes = (recipeArray) => {
    container.innerHTML = "" //reset the container

    recipeArray.forEach(recipe => {
         // ingredients
        let ingredients = [];
        if (recipe.extendedIngredients && Array.isArray(recipe.extendedIngredients)) {
            ingredients = recipe.extendedIngredients.map(ing => ing.original);
        }

        container.innerHTML += `
        <div class="recipe-card">
            <div class="recipe-image">
                <button class="like-button">♡</button>
                <img src="${recipe.image}" alt= "picture of ${recipe.title}"/>
            </div>
            <h3>${recipe.title}</h3>
            <hr class="line">
            <h4><b>Cuisine: </b>${recipe.cuisines && recipe.cuisines.length ? recipe.cuisines.join(", ") : "-"}</h4>
            <h4><b>Time: </b>${recipe.readyInMinutes} minutes</h4>
            <hr class="line">
            <h4>Ingredients</h4>
            <ul>
                ${ingredients.length
                    ? ingredients.map(ing => `<li>${ing}</li>`).join("")
                    : "<li>No ingredient info</li>"
                }
            </ul>
            <button class="view-recipe-button">
                <a href="${recipe.sourceUrl}" target="_blank"><h5>View full recipe</h5></a>
            </button>
        </div>
        `;
    });

    attachLikeEvents();
}

fetchData()

//===============================
// filter + sort recipes
//===============================

// save the selected filters here
let activeFilters = [];
let currentSort = null; // asc or desc

// reset filters when "All" button is clicked
allBtn.addEventListener("click", () => {
    activeFilters = []; // reset filters
    applyKitchenFilters();
});

// each cuisine button
filterBtn.forEach(button => {
    if (button.id === "all")
        return; // skip the "all" button

    button.addEventListener("click", () => {
        const cuisine = button.id.toLowerCase();

        if (activeFilters.includes(cuisine)) {
            // remove if already selected
            activeFilters = activeFilters.filter(c => c !== cuisine);
        } else {
            // add filter
            activeFilters.push(cuisine);
        }

        applyKitchenFilters();
    });
});

// sort buttons

descBtn.addEventListener("click", () => {
    currentSort = "desc";
    applyKitchenFilters();
});

ascBtn.addEventListener("click", () => {
    currentSort = "asc";
    applyKitchenFilters();
})

// main function : filter + sort

const applyKitchenFilters = () => {
    let filtered = [...recipes]; // make a copy of all recipes

    //apply filters
    if (activeFilters.length > 0) {
        filtered = filtered.filter(recipe => {
            if (Array.isArray(recipe.cuisines) && recipe.cuisines.length > 0) {
                return recipe.cuisines.some(c => activeFilters.includes(c.toLowerCase()));
            }
            return false;
        });
    }

    // apply sorting
    if (currentSort === "desc") {
        filtered.sort((a,b) => b.readyInMinutes - a.readyInMinutes);
    } else if (currentSort === "asc") {
        filtered.sort((a,b) => a.readyInMinutes - b.readyInMinutes);
    }

    // show empty message
    if (filtered.length > 0) {
        displayRecipes(filtered);
    } else {
        container.innerHTML = `<p class="no-results">No results</p>`;
    }
};

//===============================
// pick a random recipe
//===============================

randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    displayRecipes([randomRecipe])
})

//===============================
// like button
//===============================

const likeButtons = document.querySelectorAll(".like-button");

// change the color of the button
likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("liked");
    });
});

// save favorite recipes
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function attachLikeEvents() {
    const likeButtons = document.querySelectorAll(".like-button");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
        const card = button.closest(".recipe-card");
        const recipeID = card.dataset.id;

        if (favorites.includes(recipeId)) {
            // remove recipe if it is already liked
            favorites = favorites.filter(id => id !== recipeId);
            button.classList.remove("liked");
        } else {
            // otherwise add recipe
            favorites.push(recipeId);
            button.classList.add("liked");
        }

        // save recipes
        localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    });
}

//===============================
// show favorite recipes
//===============================

const favoriteBtn = document.querySelector(".favorites")

favoriteBtn.addEventListener("click", () => {
    const favRecipes = recipes.filter(recipe =>
        favorites.includes(recipe.id.toString())
    );

    if (favRecipes.length >0) {
        displayRecipes(favRecipes);
    } else {
        container.innerHTML = `<p class="no-results"> No favorite recipes yet</p>`;
    }
});


//===============================
// search recipes
//===============================

const searchInput = document.getElementById("text-input");
const searchTargets = document.querySelectorAll('.recipe-card');
const noResultsMessage = document.getElementById("no-results"); 

// show and hide search results
const showSearchResult = (target) => target.style.display = "";
const hideSearchResult = (target) => target.style.display = "none";

// filter search results by keyword
const filterSearchResults = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    let matchFound = false;

    searchTargets.forEach((target) => {
        const text = target.textContent.toLowerCase();
        if (text.includes(keyword)) {
            showSearchResult(target);
            matchFound = true;
        } else {
            hideSearchResult(target);
        }
    });

    // show no results message if no hits
    if (!matchFound) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
};

searchInput.addEventListener("input", filterSearchResults);

















// //===============================
// // filter recipes
// //===============================

// // save the selected filter here
// let activeFilters = []

// // show all recipes when "all" button is clicked
// allBtn.addEventListener("click", () => {
//     activeFilters = []; //reset filters
//     displayRecipes(recipes);
// });

// // 
// filterBtn.forEach(button => {
//     if (button.id === "all")return; // ignore the rest of the functions is "all" is clicked

//     button.addEventListener("click", () => {
//         const cuisine = button.id;

//         if (activeFilters.includes(cuisine)) {
//             // remove recipes if they are already displayed 
//             activeFilters = activeFilters.filter(country => country !== cuisine);
//         } else {
//             // add the filtered recipes
//             activeFilters.push(cuisine);
//         }

//         applyFilters();
//     });
// });

// const applyFilters = () => {
//     // if there are no active filters, then show all recipes
//     if (activeFilters.length === 0) {
//         displayRecipes(recipes);
//         return;
//     }

//     const filtered = recipe.filter(recipe =>
//         activeFilters.includes(recipe.cuisines.toLowerCase())
//     );

//     // if there are active recipes, show the recipes. otherwise show the text
//     if (filtered.length > 0) {
//         displayRecipes(filtered);
//     } else {
//         container.innerHTML = `<p class="no-results">No results</p>`;
//     }
// }


// //===============================
// // sort recipes (sort by time)
// //===============================

// descBtn.addEventListener("click", () => {
//     currentSort = "desc";
//     applyKitchenFilters();
// })

// ascBtn.addEventListener("click", () => {
//     currentSort = "asc";
//     applyKitchenFilters();
// })

// // filter + sort function
// const applyKitchenFilters = () => {
//     let filtered = []; // make an empty box

//     if (activeFilters.length === 0) {
//         // if no active filter, make a copy of recipes list
//         filtered = [...recipes];
//     } else {
//         // if filters are active, pick up the recipes
//         filtered = recipes.filter(recipe =>
//             activeFilters.includes(recipe.cuisine.toLowerCase())
//         );
//     }

//     // sort filtered recipes
//     if (currentSort === "desc") {
//         filtered.sort((a,b) => b.readyInMinutes - a.readyInMinutes);
//     } else {
//         filtered.sort((a,b) => a.readyInMinutes - b.readyInMinutes);
//     }

//     // display recipes
//     if (filtered.length > 0) {
//         displayRecipes(filtered);
//     } else {
//         container.innerHTML = `<p class="no-results">No results</p>`;
//     }
// };

