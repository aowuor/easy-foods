document.addEventListener("DOMContentLoaded", function(){
    getFood();
});


function getFood(){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => response.json())
    .then((data) => {
        for(food in data.meals){
            let option = document.createElement("option");
            let select = document.getElementById("options");
            select.appendChild(option);
            option.text = data.meals[food].strMeal;
            
            select.addEventListener("change", () => {
                renderMeal(select.selectedIndex);
            })
            }

    let renderMeal = (meal) => {
        let foodTitle = document.getElementById("food-title");
        foodTitle.innerHTML = data.meals[meal].strMeal;
    
        let foodInstructions = document.getElementById("food-instructions");
        foodInstructions.innerHTML = data.meals[meal].strInstructions;
        
        let mainImage = document.getElementById("main-image");
        mainImage.src = data.meals[meal].strMealThumb; 
        }
    })
}
