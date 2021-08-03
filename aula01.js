const fetch = require('node-fetch');
//1
function somar(...array) {
  return array.reduce((a, b) => {
    return a + b;
  });
}
let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

console.log(somar(...array));

//2
fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((result) => {
    console.log({
      Nome: result.meals[0].strMeal,
      ID: result.meals[0].idMeal,
      Regiao: result.meals[0].strArea,
      Ingredientes: [
        result.meals[0].strIngredient1,
        result.meals[0].strIngredient2,
        result.meals[0].strIngredient3,
        result.meals[0].strIngredient4,
        result.meals[0].strIngredient5,
        result.meals[0].strIngredient6,
        result.meals[0].strIngredient7,
        result.meals[0].strIngredient8,
        result.meals[0].strIngredient9,
      ],
      Instrucoes: result.meals[0].strInstructions,
    });
  });

//3
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(
  (res) => {
    return res.json().then((data) => console.log(data.meals.slice(0, 10)));
  }
);
