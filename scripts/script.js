const myApiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const myApiKey = '&api_key=1';

const getCocktail = async () => {
  try {
    const response = await axios.get(`${myApiURL}?api_key=${myApiKey}`);
    console.log(response.data);
    const cocktail = response.data;
    createElements(cocktail);
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

getCocktail();

function createElements(cocktail) {
  const title = document.createElement('h2');
  title.textContent = cocktail.drinks[0].strDrink;

  const image = document.createElement('img');
  image.src = cocktail.drinks[0].strDrinkThumb;
  image.alt = 'Random Cocktail';
  image.classList.add('img');

  const main = document.getElementById('cocktail-section');
  main.appendChild(title);
  main.appendChild(image);

  for (let i = 1; i < 16; i++) {
    console.log(i);
    if (cocktail.drinks[0][`strIngredient${i}`] == null) {
      break;
    }

    let ingredient = document.createElement('ons-list-item');
    ingredient.classList.add('ingredients');
    ingredient.innerText =
      cocktail.drinks[0][`strMeasure${i}`] +
      ':' +
      cocktail.drinks[0][`strIngredient${i}`];
    main.appendChild(ingredient);
  }
}
