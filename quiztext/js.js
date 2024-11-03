const questions = [
    { question: "la solution d'équation x+2=1", choix: [0, -1, -2, 3], correct: 2 },
    { question: "le nombre réel en langage C déclaré", choix: ["int", "char", "float", "%d"], correct: 2 },
    { question: "le PGCD(24,18)", choix: [2, 4, 6, 12], correct: 2 },
];

let i = 0;
let note = 0;
let choixQuestion = {}; 

function afficheQuestion()
 {

    const question = questions[i];
    document.getElementById("question-text").innerText = question.question;
    const choixButtons = document.getElementById("choix-buttons");
    choixButtons.innerHTML = '';
    
    question.choix.forEach((choix, repense) => {
        const button = document.createElement("button");
        button.innerText = choix;
        button.onclick = () => selectChoix(repense);
        
        if (choixQuestion[i] !== undefined) {
            button.disabled = true;
            if (choixQuestion[i] === repense) {
                button.style.backgroundColor = "#d3d3d3";
            }
        }

        choixButtons.appendChild(button);
    });
}

function selectChoix(selectedRepense)
 {

    if (choixQuestion[i] === undefined) {
        const correctRepense = questions[i].correct;
        choixQuestion[i] = selectedRepense;
        
        if (selectedRepense === correctRepense)
        {
            note++;
        }

        const choixButtons = document.getElementById("choix-buttons").children;
        for (let button of choixButtons) {
            button.disabled = true;
        }
    }
}

function suivant()
 {
    if (i < questions.length - 1) {
        i++;
        afficheQuestion();
    } else {
        finiQuiz();
    }
}

function retour()
 {
    if (i > 0) {
        i--;
        afficheQuestion();
    }
}

function finiQuiz()
 {
    
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("note").innerText = `la note est ${note} sur ${questions.length}`;
    
}

afficheQuestion();
