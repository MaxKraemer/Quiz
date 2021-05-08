let questions =[
    
    {
        "question":"In welchen Jahr wurde Miami gegründet?",
        "answer1":"1867",
        "answer2":"1896",
        "answer3":"1905",
        "answer4":"1934",
        "right_answer": 2,
    },
    {
        "question":"In welchem Bundesstaat liegt Miami?",
        "answer1":"Alabama",
        "answer2":"Florida",
        "answer3":"New York",
        "answer4":"Texas",
        "right_answer": 2,
    },
    {
        "question":"Wie viele Stadtviertel gibt es in Miami?",
        "answer1":"vier",
        "answer2":"zwei",
        "answer3":"sechs",
        "answer4":"neun",
        "right_answer": 3,
    },
    {
        "question":"Wie heißt das Miami Basketball Team?",
        "answer1":"Miami Marlins",
        "answer2":"Miami Dolphins",
        "answer3":"Miami Beach Flamingos",
        "answer4":"Miami Heat",
        "right_answer": 4,
    },
    {
        "question":"Wie heißt die bekannteste Staße in South Beach?",
        "answer1":"Ocean Drive",
        "answer2":"Calle Ocho",
        "answer3":"Biscayne Boulevard",
        "answer4":"Don Shula Drive",
        "right_answer": 1,
    },
  
]

/* onload section show the questions and the answers*/

let currentQuestion = 0;

function init(){

    document.getElementById('allQuestions').innerHTML = questions.length; // the number of our Questions 
    showQuestion(); //onload function to show / showQuestion

}

function showQuestion(){

    let question = questions[currentQuestion];
    
    document.getElementById('questionline').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];

}

function answer(selection){
   
    let question = questions[currentQuestion]; // let currentQuestion = 0;
    console.log('Selected answer is', selection); //which var we have(function answer(selection))
    let selectQuestionNumber = selection.slice(-1);
    console.log('selectQuestionNumber is', selectQuestionNumber);
    console.log('Current Question is', question['right_answer']);

    if(selectQuestionNumber == question['right_answer']) { // if / elso to show the right answer

        console.log('richtige Antwort!!');
        document.getElementById(selection).classList.add('bg-success'); // color change for right answer
    } else{
        document.getElementById(selection).classList.add('bg-danger'); // color change for right answer
        console.log('Falsche Antwort!!!');
        
    }

}