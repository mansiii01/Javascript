
  document.getElementById("submit").addEventListener("click", function() {
    let recipe_name = document.getElementById("recipe_name").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe_name}`;
    
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.clear();
        console.log(json);
        displayData(json);

        if(json.meals) {
            let obj = {
                strMeal: json.meals[0].strMeal,
                strCategory: json.meals[0].strCategory,
                strMealThumb: json.meals[0].strMealThumb
            }
            jsonData(obj);
        } else {
            console.log("NO MEALS FOUND");
        }
    })
    .catch(error => {
        console.log('Error Fetching The Recipe Data:', error);
    });
});

function displayData(json) {
    let div = document.createElement("div");
    document.getElementById("main").innerHTML = "";

    let meal = document.createElement("p");
    meal.innerHTML = `<b class="b">MEAL: </b> ${json.meals[0].strMeal}`;
    meal.style.marginTop = "10px";
    meal.style.fontSize = "20px";

    let category = document.createElement("p");
    category.innerHTML = `<b class="b">Category: </b> ${json.meals[0].strCategory}`;
    category.style.marginTop = "10px";
    category.style.fontSize = "20px";

    let area = document.createElement("p");
    area.innerHTML = `<b class="b">Food Area: </b> ${json.meals[0].strArea}`;
    area.style.marginTop = "10px";
    area.style.fontSize = "20px";

    let img = document.createElement("img");
    img.src = `${json.meals[0].strMealThumb}`;
    img.setAttribute("id", "image");

    let h1 = document.createElement("h1");
    h1.innerHTML = "$67.9";
    h1.style.marginTop = "10px";
    h1.setAttribute("id", "price");

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your price";
    input.className = "input-price";
    input.style.marginTop = "20px"
    input.setAttribute("id" , "input")
    input.style.display = "none";

    let editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.style.display = "block";
    editButton.style.marginTop = "20px"
    editButton.setAttribute("id" , "edit")
    editButton.addEventListener('click', () => {
        input.style.display = "block";
        updateButton.style.display = "block";
        editButton.style.display = "none";
    });

    let updateButton = document.createElement('button');
    updateButton.innerText = "Update";
    updateButton.style.display = "none";
    updateButton.style.marginTop = "20px"
    updateButton.setAttribute("id" , "update")

    updateButton.addEventListener('click', () => {
        let newPrice = input.value;
        h1.innerHTML = `$${newPrice}`;
        input.style.display = "none";
        updateButton.style.display = "none";
        editButton.style.display = "block";
    });

    div.append(meal, category, area, img, h1, input, editButton, updateButton);
    document.getElementById("main").append(div);
}

function jsonData(meals) {
    let foods = JSON.parse(localStorage.getItem("FOOD")) || [];

    let exists = foods.some(food =>
        food.strMeal === meals.strMeal &&
        food.strCategory === meals.strCategory 
    );
    if (!exists) {
        foods.push(meals);
        localStorage.setItem("FOOD", JSON.stringify(foods));
    }
}
