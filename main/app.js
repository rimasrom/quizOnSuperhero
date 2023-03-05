const readlineSync = require('readline-sync')

const userName = readlineSync.question("Enter your Name : ")
console.log(`welcome ${userName}, lets play a quiz...`)
console.log("choose the correct option using 1 , 2 or 3 as your answer")

var score = 0;

const questions = [
    {
        question : `Who is the superhero that is also known as the “Man of Steel?”
        \n 1) Batman
        \n 2) Superman
        \n 3) Ironman `,
        answer : 2
    },
    {
        question : `What is Batman’s real name?
        \n 1) Robert Downey Jr
        \n 2) Chris Evans
        \n 3) Bruce Wayne `,
        answer : 3
    },
    {
        question : `What is Superman’s weakness?
        \n 1) red sun radiation
        \n 2) magic
        \n 3) Kryptonite `,
        answer : 3
    },
    {
        question : `How did Spider-man get his superpowers?
        \n 1) He was bitten by a radioactive spider
        \n 2) He ate a radioactive spider
        \n 3) Out of nowhere he got the power one fine morning `,
        answer : 1
    },
    {
        question : `Which superhero has the magic lasso and bullet-proof bracelets?
        \n 1) Natasha Romanoff
        \n 2) Wonder Woman
        \n 3) Super Woman `,
        answer : 2
    }
]

const quiz = (question,answer)=>{
    const userAnswer = readlineSync.question(question)
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log("you are right")
        score = score + 1;
        console.log(`your score is : ${score}`)
    }else{
        console.log("you are wrong")
        console.log(`your score is : ${score}`)
    }
    console.log("____________________")
}

const play = () =>{
    for(i=0;i<questions.length;i++){
    const currentQuestion = questions[i]
    quiz(currentQuestion.question,currentQuestion.answer)
    }
}

play();