const myApiURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
const myApiKey = "&api_key=1"

const getCocktail = async () => {
    try{
        const response = await axios.get(`${myApiURL}?api_key=${myApiKey}`);
        console.log(response.data);
        const cocktail = response.data
        createElements(cocktail)
        return response.data;
    } catch(error) {
        console.log("error")
    }
}

getCocktail()
    
function createElements(cocktail) {
    const title = document.createElement("h2");
    title.textContent = cocktail.drinks[0].strDrink;
  
    const explanation = document.createElement("p");
    explanation.textContent = cocktail.drinks[0].explanation;
  
    const image = document.createElement("img");
    image.src = cocktail.hdurl;
    image.alt = "Random Cocktail";
    image.classList.add("img");
  
    const main = document.querySelector(".main");
    main.appendChild(title);
    main.appendChild(explanation);
    main.appendChild(image);
  }
  