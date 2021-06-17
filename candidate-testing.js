const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = [
  "1.) Who was the first American woman in space? ", 
  "2.) True or false: 5 kilometer == 5000 meters? ", 
  "3.) (5 + 3)/2 * 10 = ? ", 
  "4.) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "5.) What is the minimum crew size for the ISS? " 
];

let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
];

let candidateAnswers = [];
let candidateResponse = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length; i++){
      candidateResponse = input.question(questions[i]);
      candidateAnswers.push(candidateResponse);
      console.log(`Your answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]}\n`)
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
  let grade = 0;
  let finalGrade = 0;
  for(let i = 0; i < candidateAnswers.length; i++){
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
        grade++;
    }
  }

  // (Number of Correct Answers) / (Number of Quiz Questions) * 100
  finalGrade = grade / questions.length * 100;
  if (finalGrade >= 80){
    console.log("Amazing work!")
  } else {
    console.log("Sorry, try again.")
  }
  console.log(`Final score: ${finalGrade}% \n ${grade} / ${questions.length} answers were correct.`);
  return `${finalGrade}%`;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};