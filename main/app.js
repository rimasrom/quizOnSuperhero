const readlineSync = require('readline-sync')

const userName = readlineSync.question("Enter your Name : ")
console.log(`welcome ${userName}, lets play a quiz...`)
console.log("choose the correct option using 1 , 2 or 3 as your answer")

var score = 0;

const questions = [
    {
        question : `Who is the superhero that is also known as the "Man of Steel" ?
        1) Batman 
        2) Superman 
        3) Ironman \n
        your answer : `,
        answer : "2"
    },
    {
        question : `What is Batman's real name?
           1) Robert Downey Jr
           2) Chris Evans
           3) Bruce Wayne \n
           your answer : `,
        answer : "3"
    },
    {
        question : `What is Superman's weakness?
           1) red sun radiation
           2) magic
           3) Kryptonite \n
           your answer : `,
        answer : "3"
    },
    {
        question : `How did Spider-man get his superpowers?
           1) He was bitten by a radioactive spider
           2) He ate a radioactive spider
           3) Out of nowhere he got the power one fine morning \n
           your answer : `,
        answer : "1"
    },
    {
        question : `Which superhero has the magic lasso and bullet-proof bracelets?
           1) Natasha Romanoff
           2) Wonder Woman
           3) Super Woman \n
           your answer : `,
        answer : "2"
    }
]

const quiz = (question,answer)=>{
    const userAnswer = readlineSync.question(question)
    if(userAnswer===answer){
        console.log("you are right")
        score = score + 1;
        console.log(`your current score is : ${score}`)
    }else{
        console.log("you are wrong")
        console.log(`your current score is : ${score}`)
    }
    console.log("____________________")
}

const play = () =>{
    for(i=0;i<questions.length;i++){
    const currentQuestion = questions[i]
    quiz(currentQuestion.question,currentQuestion.answer)
    }
    console.log(`Your final score is : ${score}`)
}

play();