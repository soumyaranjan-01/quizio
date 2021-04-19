import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const QuestionGenerator = ({ setPage, score, setScore,user,cardId }) => {
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [choiceBackground, setChoiceBackground] = useState('')
    const [disable, setDisable] = useState(false)
    const [choice1, setChoice1] = useState(false)
    const [choice2, setChoice2] = useState(false)
    const [choice3, setChoice3] = useState(false)
    const [choice4, setChoice4] = useState(false)
    
    const questions = {
            'gk': [
                {
                    question: 'Hitler party which came into power in 1933 is known as',
                    options: [
                        [ 'A', 'Labour Party', false ],
                        [ 'B', 'Nazi Party', true ],
                        [ 'C', 'Democratic Party', false ],
                        [ 'D', 'Ku-Klux-Klan', false ]
                    ]
                },
                {
                    question: 'For which of the following disciplines is Nobel Prize awarded?',
                    options: [
                        [ 'A', 'Physics and Chemistry', false ],
                        [ 'B', 'Physiology or Medicine', false ],
                        [ 'C', 'Literature, Peace and Economics', false ],
                        [ 'D', 'All of the above', true ]
                    ]
                },
                {
                    question: 'Entomology is the science that studies',
                    options: [
                        [ 'A', 'Behavior of human beings', false ],
                        [ 'B', 'Insects', true ],
                        [ 'C', 'The origin and history of technical and scientific terms', false ],
                        [ 'D', 'The formation of rocks', false ]
                    ]
                },
                {
                    question: 'Garampani sanctuary is located at',
                    options: [
                        [ 'A', 'Junagarh, Gujarat', false ],
                        [ 'B', 'Diphu, Assam', true ],
                        [ 'C', 'Kohima, Nagaland', false ],
                        [ 'D', 'Gangtok, Sikkim', false ]
                    ]
                },
                {
                    question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
                    options: [
                        [ 'A', '1967', true ],
                        [ 'B', '1968', false ],
                        [ 'C', '1958', false ],
                        [ 'D', '1922', false ]
                    ]
                },
                {
                    question: 'Galileo was an Italian astronomer who',
                    options: [
                        [ 'A', 'developed the telescope', false ],
                        [ 'B', 'discovered four satellites of Jupiter', false ],
                        [ 'C', 'discovered that the movement of pendulum produces a regular time measurement', false ],
                        [ 'D', 'All of the above', true ]
                    ]
                },
                {
                    question: 'Epsom (England) is the place associated with',
                    options: [
                        [ 'A', 'Horse racing', true ],
                        [ 'B', 'Polo', false ],
                        [ 'C', 'Shooting', false ],
                        [ 'D', 'Snooker', false ]
                    ]
                },
                {
                    question: 'First Afghan War took place in',
                    options: [
                        [ 'A', '1839', true ],
                        [ 'B', '1843', false ],
                        [ 'C', '1833', false ],
                        [ 'D', '1848', false ]
                    ]
                },
                {
                    question: 'Exposure to sunlight helps a person improve his health because',
                    options: [
                        [ 'A', 'the infrared light kills bacteria in the body', false ],
                        [ 'B', 'resistance power increases', false ],
                        [ 'C', 'the pigment cells in the skin get stimulated and produce a healthy tan', false ],
                        [ 'D', 'the ultraviolet rays convert skin oil into Vitamin D', true ]
                    ]
                },
                {
                    question: 'Golf player Vijay Singh belongs to which country?',
                    options: [
                        [ 'A', 'USA', false ],
                        [ 'B', 'Fiji', true ],
                        [ 'C', 'India', false ],
                        [ 'D', 'UK', false ]
                    ]
                },
                
            ],
            'science': [
                {
                    question: 'Which among the following is the most primitive life form?',
                    options: [
                        [ 'A', 'Bacteria', true ],
                        [ 'B', 'Protozoa', false ],
                        [ 'C', 'Virus', false ],
                        [ 'D', 'Blue-green algae', false ]
                    ]
                },
                {
                    question: 'In which among the following, the speed of sound would be maximum?',
                    options: [
                        [ 'A', 'Dry air at 0°C', false ],
                        [ 'B', 'Dry air at 30°C', false ],
                        [ 'C', 'Humid air at 0°C', false ],
                        [ 'D', 'Humid air at 30°C', true ]
                    ]
                },
                {
                    question: 'From which among the following parts of a plant Cinnamon is obtained?',
                    options: [
                        [ 'A', 'Leaves', false ],
                        [ 'B', 'Seeds', false ],
                        [ 'C', 'Bark', true ],
                        [ 'D', 'Buds', false ]
                    ]
                },
                {
                    question: 'Which among the following is the most common media of pollination in flowers without petals?',
                    options: [
                        [ 'A', 'Wind', true ],
                        [ 'B', 'Water', false ],
                        [ 'C', 'Insects', false ],
                        [ 'D', 'All of above', false ]
                    ]
                },
                {
                    question: 'Least generative power is a feature of which among the following cells of Human Body?',
                    options: [
                        [ 'A', 'Brain', true ],
                        [ 'B', 'Bones', false ],
                        [ 'C', 'Skin', false ],
                        [ 'D', 'Liver', false ]
                    ]
                },
                {
                    question: 'Which part of the Central Nervous System controls “reflex Actions” ?',
                    options: [
                        [ 'A', 'Mesencephalon', false ],
                        [ 'B', 'Rhombencephalon', false ],
                        [ 'C', 'Medulla oblongata', false ],
                        [ 'D', 'Spinal Chord', true ]
                    ]
                },
                {
                    question: 'How many pairs of ribs are there in a human body?',
                    options: [
                        [ 'A', '10 pairs', false ],
                        [ 'B', '12 pairs', true ],
                        [ 'C', '14 pairs', false ],
                        [ 'D', '16 pairs', false ]
                    ]
                },
                {
                    question: 'Which among the following plays a role in production of alcohol in bear ?',
                    options: [
                        [ 'A', 'Bacteria', false ],
                        [ 'B', 'Protozoan', false ],
                        [ 'C', 'Virus', false ],
                        [ 'D', 'Yeast', true ]
                    ]
                },
                {
                    question: 'Cholorophyll is found in ?',
                    options: [
                        [ 'A', 'Algae', false ],
                        [ 'B', 'Ferns', false ],
                        [ 'C', 'Mosses', false ],
                        [ 'D', 'All of the above', true ]
                    ]
                },
                {
                    question: 'During the process of Osmosis the solvent travels from ',
                    options: [
                        [ 'A', 'Concentrated solution to dilute solution', true ],
                        [ 'B', 'Dilute solution to the concentrated solution', false ],
                        [ 'C', 'Solvent does not travel in osmosis', false ],
                        [ 'D', 'None of the above', false ]
                    ]
                }, 
            ],
            'history': [
                {
                    question: 'Which among the following is not a correct pair?',
                    options: [
                        [ 'A', 'Ellora Caves – Rastrakuta Rulers', false ],
                        [ 'B', 'Mahabalipuram – Pallava Rulers', false ],
                        [ 'C', 'Khajuraho – Chandellas', false ],
                        [ 'D', 'Elephanta Caves – Mauyra Era', true ]
                    ]
                },
                {
                    question: 'Which among the following Kavya of Sanskrit, deal with court intrigues & access to power of Chandragupta Maurya?',
                    options: [
                        [ 'A', 'Mrichhakatika', false ],
                        [ 'B', 'Ritusamhara', false ],
                        [ 'C', 'Kumarasambhava', false ],
                        [ 'D', 'Mudrarakshahsa', true ]
                    ]
                },
                {
                    question: 'On which of the following systems of Hindu Philosophy , Shankaracharya wrote commentary in 9th century AD?',
                    options: [
                        [ 'A', 'Sankhya', false ],
                        [ 'B', 'Vaisheshika', false ],
                        [ 'C', 'Yoga', false ],
                        [ 'D', 'Uttarmimansa', true ]
                    ]
                },
                {
                    question: 'The eighth-century tripartite power struggle was among which of the following?',
                    options: [
                        [ 'A', 'Cholas, Rastrakutas and Yadavas', false ],
                        [ 'B', 'Chalukyas, Pallavas and Pandyas', true],
                        [ 'C', 'Cholas, Pandyas and Chalukyas', false ],
                        [ 'D', 'Chalukyas, Pallavas and Yadavas', false ]
                    ]
                },
                {
                    question: 'Which among the following is not correct?',
                    options: [
                        [ 'A', 'The capital of pandyas was Madurai', false ],
                        [ 'B', 'The capital of Cheras was Vanchi', false ],
                        [ 'C', 'Capital of the Videha Kingdom – Mithila', true ],
                        [ 'D', 'Capital of Gahadwal Dynasty – Kannauj', false ]
                    ]
                },{
                    question: 'Upnishads are books on :',
                    options: [
                        [ 'A', 'Politics', false ],
                        [ 'B', 'Philosophy', true ],
                        [ 'C', 'Medicine', false ],
                        [ 'D', 'Social life', false ]
                    ]
                },
                {
                    question: 'Who was the first Indian ruler who had territory outside India?',
                    options: [
                        [ 'A', 'Ashoka', false ],
                        [ 'B', 'Chandragupta Maurya', false ],
                        [ 'C', 'Kanishka', true ],
                        [ 'D', 'Huvishka', false ]
                    ]
                },
                {
                    question: 'Who among the following was worshipped during Early Vedic Civilization?',
                    options: [
                        [ 'A', 'Varuna', false ],
                        [ 'B', 'Indra', false ],
                        [ 'C', 'Surya', false ],
                        [ 'D', 'All the above', true ]
                    ]
                },
                {
                    question: 'What led to the end of Indus Valley Civilization?',
                    options: [
                        [ 'A', 'Invasion of Aryans', false ],
                        [ 'B', 'Recurrent Floods', false ],
                        [ 'C', 'Earthquakes', false ],
                        [ 'D', 'All the above', true ]
                    ]
                },
                {
                    question: 'Who was the main male God worshipped by Indus people?',
                    options: [
                        [ 'A', 'Lord Vishnu', true ],
                        [ 'B', 'Vishnu', false ],
                        [ 'C', 'Brahma', false ],
                        [ 'D', 'Indra', false ]
                    ]
                }
            ],
    }
    
    const validator = (check, token) => {
        if(token === 1) {
            setChoice1(true)
        } else if(token === 2) {
            setChoice2(true)
        } else if(token === 3) {
            setChoice3(true)
        } else if(token === 4) {
            setChoice4(true)
        }
        setDisable(true)
        if(check) {
            setChoiceBackground('success')
            setScore(score+50)
        } else {
            setChoiceBackground('danger')
        }
    }

    const nextFn = () => {
        if(currentQuestion < questions[cardId].length){
            setDisable(false)
            if(choice1) {
                setChoice1(false)
            } else if(choice2) {
                setChoice2(false)
            } else if(choice3) {
                setChoice3(false)
            } else if(choice4) {
                setChoice4(false)
            }
            setCurrentQuestion(currentQuestion+1)
            setChoiceBackground('primary')
        } else {
            setPage('Leaderboard')
        }
        
    }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column align-items-start">
                    <div className="question-word">
                        <h3>Question</h3>
                    </div>
                    <div id="question-no">
                        <h3 className="text-center" style={{width: '4em'}}>{currentQuestion}/{questions[cardId].length}</h3>
                    </div>
                </div>
                <div id="score-block">
                    <div id="score-word">
                        <h3>Score</h3>
                    </div>
                    <div id="sc-no">
                        <h3 className="text-center" style={{width: '4em'}}>{score}</h3>
                    </div>
                </div>
            </div>
            <div>
                <div id="question-block">
                    <h2 className="text-left">{questions[cardId][currentQuestion-1].question}</h2>
                </div>
                <div id="options-block">
                    <Button 
                        variant={choice1 ? choiceBackground: 'primary'} 
                        id="option-1" 
                        className="text-left w-100" 
                        onClick={() => validator(questions[cardId][currentQuestion-1].options[0][2], 1)}
                        style={{color: 'whitesmoke', margin: '5px 0', padding: '20px', cursor: 'pointer'}}
                        disabled = {disable}
                    >
                        <p style={{marginBottom: '0'}}>{questions[cardId][currentQuestion-1].options[0][0]}) {questions[cardId][currentQuestion-1].options[0][1]}</p>
                    </Button>
                    <Button 
                        variant={choice2 ? choiceBackground: 'primary'} 
                        id="option-2" 
                        className="text-left w-100" 
                        onClick={() => validator(questions[cardId][currentQuestion-1].options[1][2], 2)}
                        style={{color: 'whitesmoke', margin: '5px 0', padding: '20px', cursor: 'pointer'}}
                        disabled = {disable}
                    >
                        <p style={{marginBottom: '0'}}>{questions[cardId][currentQuestion-1].options[1][0]}) {questions[cardId][currentQuestion-1].options[1][1]}</p>
                    </Button>
                    <Button 
                        variant={choice3 ? choiceBackground: 'primary'} 
                        id="option-3" 
                        className="text-left w-100" 
                        onClick={() => validator(questions[cardId][currentQuestion-1].options[2][2], 3)}
                        style={{color: 'whitesmoke', margin: '5px 0', padding: '20px', cursor: 'pointer'}}
                        disabled = {disable}
                    >
                        <p style={{marginBottom: '0'}}>{questions[cardId][currentQuestion-1].options[2][0]}) {questions[cardId][currentQuestion-1].options[2][1]}</p>
                    </Button>
                    <Button 
                        variant={choice4 ? choiceBackground: 'primary'} 
                        id="option-4" 
                        className="text-left w-100" 
                        onClick={() => validator(questions[cardId][currentQuestion-1].options[3][2], 4)}
                        style={{color: 'whitesmoke', margin: '5px 0', padding: '20px', cursor: 'pointer'}}
                        disabled = {disable}
                    >
                        <p style={{marginBottom: '0'}}>{questions[cardId][currentQuestion-1].options[3][0]}) {questions[cardId][currentQuestion-1].options[3][1]}</p>
                    </Button>
                    <Button 
                        variant='success'  
                        className="text-center" 
                        onClick={nextFn}
                        style={{color: 'whitesmoke', margin: '5px 0', cursor: 'pointer'}}
                        disabled = {!disable}
                    >
                        <p style={{marginBottom: '0'}}>Submit</p>
                    </Button>
                </div>
            </div>    
        </div>
    )
}

export default QuestionGenerator
