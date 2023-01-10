/* eslint-disable object-curly-newline */
import { readlineSync, greeting, randomNum, checkResult } from '../index.js';

const playerName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandom = () => {
  let countRightQuestions = 0;
  let rightAnswer;

  while (countRightQuestions < 3) {
    const num = randomNum();
    if (num % 2 === 0) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer ');

    if (answer === rightAnswer) {
      countRightQuestions += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      break;
    }
  }

  checkResult(countRightQuestions, playerName);
};
export default getRandom;