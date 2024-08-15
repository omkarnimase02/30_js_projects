
// add questions

const questions =[
    {
        question :"Which is largest animal in the world?",
        answers:[
            {text:"Shark" , correct:false},
            {text:"Blue whale" , correct:true},
            {text:"Elephant" , correct:false},
            {text:"Giraffe" , correct:false},
        ]

    },
    {
        question :"Which is smallest Country in the world?",
        answers:[
            {text:"Valica City" , correct:true},
            {text:"Bhutan" , correct:false},
            {text:"Nepal" , correct:false},
            {text:"Shri Lanka" , correct:false},
        ]

    },
    {
        question :"Which is largest desert in the world?",
        answers:[
            {text:"Kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"Sahara" , correct:false},
            {text:"Antarctica" , correct:true},
        ]

    },
    {
        question :"Which is smallest continent in the world?",
        answers:[
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
            {text:"Arctic" , correct:false},
            {text:"Africa" , correct:false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currQuesIndex =0;
let score =0;


// start quiz
function startQuiz(){
    currQuesIndex=0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();
}

// show qustion
function showQuestion(){
    resetState();

    // add qustion num & question with its options are display
    let currQues = questions[currQuesIndex];
    let qNo =currQuesIndex+1;
    questionElement.innerHTML=qNo + ". "+currQues.question;

    currQues.answers.forEach(ans =>{
        const button =document.createElement("button");
        button.innerHTML =ans.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(ans.correct){
            button.dataset.correct =ans.correct;
        }

        button.addEventListener("click" ,selectAnswer)
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

};

//  selection of anwer from ths option
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";

        // if correct incre score
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    // at a time only one is select
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display ="block" ;  // if answer display next butt option
}
// to show the score

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score ${score} out of  ${questions.length} !!!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display ="block";
}
// operation of next button
function handleNextButton(){
    currQuesIndex++;
    if(currQuesIndex < questions.length){
        showQuestion(); 
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currQuesIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();
