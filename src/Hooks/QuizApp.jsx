import React, { useState } from 'react'

function QuizApp() {
  let data = [
    {
      questionText: "What comes after January?",
      answer: [
        { answerText: "Feb", isCorrect: true },
        { answerText: "Jan", isCorrect: false },
        { answerText: "March", isCorrect: false },
        { answerText: "April", isCorrect: false },
      ],
    },
    {
      questionText: "What comes after Feb?",
      answer: [
        { answerText: "Feb2", isCorrect: false },
        { answerText: "Jan2", isCorrect: false },
        { answerText: "March2", isCorrect: true },
        { answerText: "April2", isCorrect: false },
      ],
    },
    {
      questionText: "What comes after March?",
      answer: [
        { answerText: "Feb3", isCorrect: false },
        { answerText: "Jan3", isCorrect: false },
        { answerText: "March3", isCorrect: false },
        { answerText: "April3", isCorrect: true },
      ],
    },
    {
      questionText: "What comes after April?",
      answer: [
        { answerText: "Feb4", isCorrect: false },
        { answerText: "Jan4", isCorrect: false },
        { answerText: "March4", isCorrect: false },
        { answerText: "May4", isCorrect: true },
      ],
    },
  ];
  // console.log(data);

let [q,setQ] = useState(0)
let [showscore,setShowScore] = useState(false)
let [score,setScore] = useState(0)

function handleClick(para){

console.log(para);

if(para==true){
setScore(score+1)
}

let nextq = q +1
if(nextq < data.length){
  setQ(nextq)
}else{
  alert('Quiz Over')
  setShowScore(!showscore)
}
}

  return (
   <>
  
   <div className="quizapp">
    { 
    showscore ? 
    <div className="score-section">
      <h1>You SCORED =  {score}</h1>
    </div>
    :
    <div className="ques-ans-section">
      <div className="ques">
        <h2>Q.{q+1} ) {data[q].questionText} </h2>
      </div>
      <div className="answer">
       
          {
            data[q].answer.map((ele,index)=>{
              return <button 
              key={index} 
              // onClick={handleClick}
              onClick={()=>handleClick(ele.isCorrect)}
              >
              {ele.answerText}
              </button>
            })
          }
       
      </div>
    </div>
}
   </div>
   </>
  )
}

export default QuizApp