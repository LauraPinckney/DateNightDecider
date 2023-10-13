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

const myApiURLTrivia = 'http://jservice.io/api/random';
const getTrivia = async () => {
  try {
    const response = await axios.get(`${myApiURLTrivia}`);
    const trivia = response.data;
    console.log(trivia);
    createTriviaQuestion(trivia);
    createTriviaElement(trivia);
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

getTrivia();

const triviaSec = document.getElementById('trivia-section');
function createTriviaElement(trivia) {
  const answer = document.createElement('h2');
  answer.textContent = trivia[0].answer;
  triviaSec.appendChild(answer);
}

function createTriviaQuestion(trivia) {
  const question = document.createElement('h3');
  question.textContent = trivia[0].question;
  triviaSec.appendChild(question);
}



const movies = [
  {
    name: "Moana",
    imgSrc: "./images/moana.jpg"
  },
  {
    name: "The wolf of wall street",
    img: "./images/wall-street.jpg"
  },
  {
    name: "The commitments",
    img: "./images/commitments.jpg"
  },
  {
    name: "Top Gun",
    img: "../images/top-gun.jpg"
  },
  {
    name: "Spider-man",
    img: "./images/spider.jpg"
  },
  {
    name: "Guardians of the galaxy",
    img: "./images/gotg.jpg"
  },
  {
    name: "Shutter Island",
    img: "./images/shutter-island.jpg"
  },
  {
    name: "Paddington",
    img: "./images/paddington.jpg"
  },
  {
    name: "Titanic",
    img: "./images/titanic.jpg"
  },
  {
    name: "The Terminator",
    img: "./images/terminator.jpg"
  },
  {
    name: "Fast and Furous: Tokyo Drift",
    img: "./images/faf.jpg"
  },
  {
    name: "My Big Fat Greek Wedding",
    img: "./images/greek-wedding.jpg"
  },
  {
    name: "The Blindside",
    img: "./images/blindside.jpg"
  },
  {
    name: "Shaun Of The Dead",
    img: "./images/shaun.jpg"
  },
  {
    name: "Shrek",
    img: "./images/shrek.jpg"
  },
  {
    name: "Blade Runner 2049",
    img: "./images/blade.jpg"
  }
]

function addMovies() {
  document.querySelector(".display__movie").innerText = "";
      const movieCard = document.createElement("div");
      const movieTitle = document.createElement("h2");
      const movieImg = document.createElement("img");

      movieTitle.classList.add("movie__title")
      movieImg.classList.add("movie__image");

       const randomMovie = getRandomNumber()
      movieTitle.innerText = movies[randomMovie].name;
      movieImg.setAttribute("src", movies[randomMovie].img)

      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieImg);


      document.querySelector(".display__movie").appendChild(movieCard);
    }


  function getRandomNumber(){
   return Math.floor(Math.random() * 15) 
  }

  getRandomNumber()
  addMovies()