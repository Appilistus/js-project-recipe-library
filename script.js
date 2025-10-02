const allBtn = document.getElementById("all")
const filterBtn = document.querySelectorAll(".filter-btn")

const sortBtn = document.querySelectorAll(".sort-btn")
const descBtn = document.getElementById("desc")
const ascBtn = document.getElementById("asc")

const randomBtn = document.querySelector(".random-btn")

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
            <img src="${recipe.image}" alt= "picture of food"/>
            <h3>${recipe.title}</h3>
            <hr class="line">
            <h4><b>Cuisine: </b>${recipe.cuisine}</h4>
            <h4><b>Time: </b>${recipe.readyInMinutes} minutes</h4>
            <hr class="line">
            <h4>Ingredients</h4>
            <ul>${recipe.ingredients.join("<br>")}</ul>
        </div>
        `
    })
}

displayRecipes(recipes);

//===============================
// filter recipes
//===============================

// save the selected filter
let activeFilters = []

// show all recipes when "all" button is clicked
allBtn.addEventListener("click", () => {
    activeFilters = [];
    displayRecipes(recipes);
});

// 
filterBtn.forEach(button => {
    if (button.id === "all")return;

    button.addEventListener("click", () => {
        const cuisine = button.id;

        if (activeFilters.includes(cuisine)) {
            activeFilters = activeFilters.filter(f => f !== cuisine); // f = filter name
        } else {
            // 
            activeFilters.push(cuisine);
        }

        applyFilters();
    });
});

const applyFilters = () => {
    if (activeFilters.length === 0) {
        displayRecipes(recipes);
        return;
    }

    const filtered = recipes.filter(recipe =>
        activeFilters.includes(recipe.cuisine.toLowerCase())
    );

    if (filtered.length > 0) {
        displayRecipes(filtered);
    } else {
        container.innerHTML = `<p class="no-results">No results</p>`;
    }
}


//===============================
// sort recipes (sort by time)
//===============================

descBtn.addEventListener("click", () => {
    currentSort = "desc";
    applyKitchenFilters();
})

ascBtn.addEventListener("click", () => {
    currentSort = "asc";
    applyKitchenFilters();
})

// filter + sort function
const applyKitchenFilters = () => {
    let filtered = [];

    // sort all recipes
    if (activeFilters.length === 0) {
        filtered = [...recipes];
    } else {
        filtered = recipes.filter(recipe =>
            activeFilters.includes(recipe.cuisine.toLocaleLowerCase())
        );
    }

    // sort filtered recipes
    if (currentSort === "desc") {
        filtered.sort((a,b) => b.readyInMinutes - a.readyInMinutes);
    } else {
        filtered.sort((a,b) => a.readyInMinutes - b.readyInMinutes);
    }

    // display recipes
    if (filtered.length > 0) {
        displayRecipes(filtered);
    } else {
        container.innerHTML = `<p class="no-results>No results</p>`;
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
