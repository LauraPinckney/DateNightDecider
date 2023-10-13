const myApiURLTrivia = 'http://jservice.io/api/random';
const triviaObject = { question, answer };

const triviaDiv = document.createElement('div');
triviaDiv.classList.add('trivia__container');

const triviaAnswer = document.createElement('p');
triviaAnswer.classList.add('trivia__answer');
triviaAnswer.textContent = answer;

const triviaQuestion = document.createElement('p');
triviaQuestion.classList.add('trivia__question');
triviaQuestion.textContent = question;

triviaDiv.appendChild(triviaAnswer);
triviaDiv.appendChild(triviaQuestion);

// const getTrivia = async () => {
//   try {
//     const response = await axios.get(`${myApiURLTrivia}`);
//     const trivia = response.data;
//     createElements(trivia);
//     return response.data;
//   } catch (error) {
//     console.log('error');
//   }
// };

// getTrivia();
