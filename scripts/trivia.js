const myApiURLTrivia = 'http://jservice.io/api/random';

const getTrivia = async () => {
  try {
    const response = await axios.get(`${myApiURLTrivia}`);
    const trivia = response.data;
    createElements(trivia);
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

getTrivia();

// function createElements(trivia) {
//   const title = document.createElement("h2");
//   title.textContent = trivia.question;

//   const image = document.createElement("img");
//   image.src = cocktail.drinks[0].strDrinkThumb;
//   image.alt = "Random Cocktail";
//   image.classList.add("img");

//   const main = document.querySelector(".main");
//   main.appendChild(title);
//   main.appendChild(image);

//   for (let i = 1; i < 16; i++){
//   console.log(i);
//   if(cocktail.drinks[0][`strIngredient${i}`] == null){
//       break;
//   }

//   let ingredient = document.createElement('ons-list-item');
//   ingredient.classList.add("ingredients")
//   ingredient.innerText = cocktail.drinks[0][`strMeasure${i}`] + ':' + cocktail.drinks[0][`strIngredient${i}`]
//   main.appendChild(ingredient)
//   }
// }
