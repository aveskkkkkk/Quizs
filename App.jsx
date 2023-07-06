import React, {useState} from 'react';


export default function App(){
    const [currentIndex , setCurrentIndex] = useState(0)
    const questions =[ 
        {
            questionText:'What country has the highest life expectancy?',
            answerOptions:[
            {answerText:'Nepal',isCorrect:false},
            {answerText:'Hongkong',isCorrect:true},
            {answerText:'China',isCorrect:false},
            {answerText:'Japan',isCorrect:false},
            ],
        },
        {
            questionText:'What disease commonly spread on pirate ships?',
            answerOptions:[
            {answerText:'scurvy',isCorrect:true},
            {answerText:'Aids',isCorrect:false},
            {answerText:'common cold',isCorrect:false},
            {answerText:'sea sickness',isCorrect:false},
            ],
        },
        {
            questionText:'What sports car company manufactures the 911?',
            answerOptions:[
            {answerText:'Bugati',isCorrect:false},
            {answerText:'tyota',isCorrect:false},
            {answerText:'mahendra',isCorrect:false},
            {answerText:'posche',isCorrect:true},
            ],
        },
        {
            quesrionText:'What company was initially known as "Blue Ribbon Sports"?',
            answerOptions:[
            {answerText:'Nike',isCorrect:true},
            {answerText:'Adidas',isCorrect:false},
            {answerText:'Puma',isCorrect:false},
            {answerText:'Axis',isCorrect:false},
            ],
        },
        {
            questionText:'Which planet has the most moons?',
            answerOptions:[
            {answerText:'Venus',isCorrect:false},
            {answerText:'Neptune',isCorrect:false},
            {answerText:'Saturn',isCorrect:true},
            {answerText:'Earth',isCorrect:false},
            ],
        },
        {
            questionText:'How many bones do we have in an ear?',
            answerOptions:[
            {answerText:'3',isCorrect:true},
            {answerText:'4',isCorrect:false},
            {answerText:'5',isCorrect:false},
            {answerText:'2',isCorrect:false},
            ],
        },
        {
            questionText:'What software company is headquartered in Redmond, Washington?',
            answerOptions:[
            {answerText:'Apple',isCorrect:false},
            {answerText:'Linux',isCorrect:false},
            {answerText:'Chat gpt',isCorrect:false},
            {answerText:'Micro-soft',isCorrect:true},
            ],
        },
        {
            questionText:'True or False: Halloween originated as an ancient Irish festival.',
            answerOptions:[
            {answerText:'True',isCorrect:true},
            {answerText:'false',isCorrect:false},
            {answerText:'true true',isCorrect:false},
            {answerText:'false false',isCorrect:false},
            ],
        },

    ]
    
	function handleAnswerClick(isCorrect) {
		

		if (currentIndex === questions.length - 1) {
			// quiz over
			setQuizFinished(true)
		} else {
			setCurrentIndex((value) => value + 1)
		}
        if(isCorrect){
            setScore(score => score+1)
            

        }
	}

	const [quizFinished, setQuizFinished] = useState(false)
const [score , setScore] = useState(0)

    return (
		<div className="app">
			{quizFinished  ? (
				/* Change this hardcoded 1 to state variable score else */
				<div className="score-section">
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question 1</span>/{questions.length}
						</div>
						<div className="question-text">
							{questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
						{questions[currentIndex].answerOptions.map((answer) => {
							// Add onClick listener to this button
							return (
								<button
									onClick={()=>handleAnswerClick(answer.isCorrect)}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)

}