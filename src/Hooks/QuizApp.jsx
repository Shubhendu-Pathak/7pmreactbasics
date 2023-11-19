import React, { useState } from "react";

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
  console.log(data);

  let [ques, setQues] = useState(0);
  let [showScore, setShowScore] = useState(false)
let [score,setScore] = useState(0)

  let handleQues = (para) => {
    console.log(para);

    if(para===true) setScore(score+1)

let nxtq = ques + 1;
if(nxtq < data.length){
    setQues(nxtq)
}else{
    alert('Quiz Over')
    setShowScore(!showScore)
}
  };

  return (
    <>
    
  
 {
showScore ? 
  <div className="score-section">
  <h1>You scored {score}</h1>
</div>
:
<div className="ques-ans-section">
  <div className="ques-section">
    <h2>{data[ques].questionText}</h2>
  </div>
  <div className="ans-section">
    {data[ques].answer.map((ele, index) => {
      return (
        <button 
        // onClick={handleQues}
        onClick={()=>handleQues(ele.isCorrect)}
        key={index}>
        {ele.answerText}
        </button>
      );
    })}
  </div>
</div>
 }
    </>
  );
}

export default QuizApp;
