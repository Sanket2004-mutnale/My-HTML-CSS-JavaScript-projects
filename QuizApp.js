const questions =[
    {
        question :"Which is the largest animal in world?",
        answers:[
            { text : "shrak", correct : false},
            { text : "Blue-wheel", correct : true},
            { text : "Elphant", correct : false},
            { text : "Ant", correct : false},
        ]
    },
    {
        question :"Which is the smallest continent in the world?",
        answers:[
            { text : "Aisa", correct : false},
            { text : "Australia", correct : true},
            { text : "Arctic", correct : false},
            { text : "Africant", correct : false},
        ]
    },
    {
        question :"Which is the largest desert in world?",
        answers:[
            { text : "kalahari", correct : false},
            { text : "Gobi", correct : false},
            { text : "sahara", correct : false},
            { text : "Antractia", correct : true },
        ]
    }
];

const questionelement = document.getElementById('question')
const ansbutton = document.getElementById('Ans-Button')
const nextbutton = document.getElementById('Next-butt')

let currentQuestionindex = 0;
let score =0;

function startQuiz(){
    currentQuestionindex =0;
    score=0;
    nextbutton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentquestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex+1;
    questionelement.innerHTML=questionNo+". "+currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("butt");
        ansbutton.appendChild(button);
        if (answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextbutton.style.display="none";
    while(ansbutton.firstChild){
        ansbutton.removeChild(ansbutton.firstChild);
    }
}

function selectAnswer(e){
    const selecedtbtn =e.target;
    const isCorrect = selecedtbtn.dataset.correct ==="true";
    if(isCorrect){
        selecedtbtn.classList.add("correct");
        score++;
    }
    else{
        selecedtbtn.classList.add("incorrect");
    }
    Array.from(ansbutton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display ="block";
}
function showScore(){
    resetState();
    questionelement.innerHTML=`You score ${score} out of ${questions.length}!`;
    nextbutton.innerHTML ="Play again";
    nextbutton.style.display = "block"
}
function handlenextbutton(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextbutton.addEventListener("click",()=>{
    if(currentQuestionindex<questions.length){
        handlenextbutton();
    }
    else{
        startQuiz();
    }
})


startQuiz();