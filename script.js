 const questions = [
    {
        question: " which is largest animal in world ?",
        answer:[
            {text:"Shark", correct: false},
            {text:"Blue-Whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraafe", correct: false},
        ]
    },
    {
        question: " which is largest continent in world ?",
        answer:[
            {text:"Asia", correct: true},
            {text:"Australia", correct: false},
            {text:"Europe", correct: false},
            {text:"North-America", correct: false},
        ]
    },
    {
        question: " which country has the largest population in world ?",
        answer:[
            {text:"London", correct: false},
            {text:"Africa", correct: false},
            {text:"Seoul", correct: false},
            {text:"India", correct: true},
        ]
    },
    {
        question: " which country has won most number of cricket world-cups ?",
        answer:[
            {text:"New-Zealand", correct: false},
            {text:"India", correct: false},
            {text:"Australia", correct: true},
            {text:"England", correct: false},
        ]
    },

 ];

 const questionelement = document.getElementById("question");
 const ansbuttons = document.getElementById("answer-buttons");
 const nextbutton = document.getElementById("next-btn");

 let currentquestionindex = 0;
 let score = 0;

 function startquiz() {
    currentquestionindex =0;
    score=0;
    nextbutton.innerHTML = "Next";
    showquestion();
 }

 function showquestion() {
    resetstate()
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex +1;
    questionelement.innerHTML = questionno + ". "+currentquestion.question; 

    currentquestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansbuttons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
 }

 function resetstate() {
    nextbutton.style.display="none";
    while(ansbuttons.firstChild) {
        ansbuttons.removeChild(ansbuttons.firstChild);
    }
 }

 function selectanswer(e) {
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct ==="true";
    if(iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(ansbuttons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextbutton.style.display = "block";
 }

 function showscore() {
    resetstate();
    questionelement.innerHTML=` You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
 }
 function handlenextbutton() {
    currentquestionindex++;
    if(currentquestionindex < questions.length) {
        showquestion();
    }
    else {
        showscore();
    }
 }

 nextbutton.addEventListener("click", ()=> {
    if(currentquestionindex < questions.length) {
        handlenextbutton();
    }
    else {
        startquiz(); 
    }
 })
 startquiz();