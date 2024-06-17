/* eslint-disable react/prop-types */
import { useState } from 'react'
import HTML from '../../starter-code/assets/images/icon-html.svg'
import ToggleTheme from '../utils/ToggleTheme'
import ButtonUtil from '../utils/ButtonUtil'
import OptionCard from '../utils/OptionCard'
import QuizHeader from '../utils/QuizHeader'
import QuestionComponent from '../utils/QuestionComponent'
import QuizScore from './QuizScore'
import { useQuizData } from '../Custom/useQuizData'

const HtmlQuiz = ({
  quizScore,
  setquizScore,
  toggleDark,
  settoggleDark,
  setquizType,
}) => {
  const [quesCounter, setquesCounter] = useState(0)
  const [optionSelected, setoptionSelected] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  })
  const [isCorrect, setisCorrect] = useState(null)
  const [isSubmit, setisSubmit] = useState(false)
  const [selectedOption, setselectedOption] = useState(null)
  const [errorMsg, seterrorMsg] = useState('')

  const htmlQuiz = useQuizData('/data.json')

  const handleoptionSelection = (idx) => {
    setoptionSelected((prevState) => {
      const newState = { ...prevState }
      for (const key in newState) {
        newState[key] = false
      }
      newState[idx] = true
      return newState
    })
  }

  const checkOption = (correctAnswer) => {
    let isOptionSelected = false
    let selectedOptionIdx

    for (const key in optionSelected) {
      if (optionSelected[key] === true) {
        isOptionSelected = true
        selectedOptionIdx = key - 1
        break
      }
    }

    if (!isOptionSelected) {
      seterrorMsg('Please select an answer')
      return
    } else {
      seterrorMsg('')
    }

    if (
      htmlQuiz.quizzes[0].questions[quesCounter].options[selectedOptionIdx] ===
      correctAnswer
    ) {
      setquizScore(quizScore + 1)
    }

    setisCorrect(
      htmlQuiz.quizzes[0].questions[quesCounter].options[selectedOptionIdx] ===
        correctAnswer
    )

    setselectedOption(selectedOptionIdx)
    setisSubmit(true)
  }

  const incrementQuesCounter = () => {
    setquesCounter(quesCounter + 1)
    setisCorrect(null)
    setisSubmit(false)
    setoptionSelected({
      1: false,
      2: false,
      3: false,
      4: false,
    })
    setselectedOption(null)
  }

  return (
    <div
      id={toggleDark ? 'welcome-dark-container' : 'welcome-container'}
      className="h-[100vh] w-[100%] flex-col justify-center items-center bg-slate-100"
    >
      {htmlQuiz ? (
        <>
          <div className="flex items-center justify-between py-9 w-[95%] m-auto">
            <QuizHeader
              imgSrc={HTML}
              headerTitle={htmlQuiz.quizzes[0].title}
              width="w-[8%]"
              iconBg="bg-red-100"
              toggleDark={toggleDark}
            />
            <ToggleTheme
              position="relative"
              display="flex"
              toggleDark={toggleDark}
              settoggleDark={settoggleDark}
            />
          </div>

          <div className="w-[100%] m-auto flex justify-between p-14 lg:flex-col sm:px-4">
            {quesCounter === htmlQuiz.quizzes[0].questions.length ? (
              <QuizScore
                quizScore={quizScore}
                setquizScore={setquizScore}
                title="HTML"
                icon={HTML}
                total={htmlQuiz.quizzes[0].questions.length}
                setquesCounter={setquesCounter}
                setisCorrect={setisCorrect}
                setisSubmit={setisSubmit}
                setoptionSelected={setoptionSelected}
                setselectedOption={setselectedOption}
                iconBg="bg-red-100"
                toggleDark={toggleDark}
                setquizType={setquizType}
              />
            ) : (
              <>
                <QuestionComponent
                  questionNumber={quesCounter}
                  totalQuestion={htmlQuiz.quizzes[0].questions.length}
                  question={htmlQuiz.quizzes[0].questions[quesCounter].question}
                  toggleDark={toggleDark}
                />
                <div className="relative">
                  {htmlQuiz.quizzes[0].questions[quesCounter].options.map(
                    (option, idx) => (
                      <OptionCard
                        key={idx}
                        idx={idx}
                        isSubmit={isSubmit}
                        isCorrect={isCorrect}
                        option={option}
                        selectedOption={selectedOption}
                        optionSelected={optionSelected}
                        answer={
                          htmlQuiz.quizzes[0].questions[quesCounter].answer
                        }
                        handleoptionSelection={handleoptionSelection}
                        toggleDark={toggleDark}
                      />
                    )
                  )}

                  {!isSubmit ? (
                    <ButtonUtil
                      buttonContent="Submit Answer"
                      btnFunction={checkOption}
                      correctAnswer={
                        htmlQuiz.quizzes[0].questions[quesCounter].answer
                      }
                    />
                  ) : (
                    <ButtonUtil
                      buttonContent="Next Question"
                      btnFunction={incrementQuesCounter}
                    />
                  )}
                  {errorMsg ? (
                    <p className="flex items-center text-red-500 justify-center absolute right-[50%] translate-x-[50%] sm:w-[100%]">
                      <span>
                        <img src="../../starter-code/assets/images/icon-incorrect.svg" />
                      </span>{' '}
                      {errorMsg}
                    </p>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </>
      ) : null}
    </div>
  )
}
export default HtmlQuiz
