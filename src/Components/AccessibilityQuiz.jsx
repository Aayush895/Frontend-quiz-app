/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useQuizData } from '../Custom/useQuizData'
import Access from '../../starter-code/assets/images/icon-accessibility.svg'
import QuizHeader from '../utils/QuizHeader'
import ToggleTheme from '../utils/ToggleTheme'
import QuizScore from './QuizScore'
import QuestionComponent from '../utils/QuestionComponent'
import OptionCard from '../utils/OptionCard'
import ButtonUtil from '../utils/ButtonUtil'

const AccessibilityQuiz = ({
  quizScore,
  setquizScore,
  toggleDark,
  settoggleDark,
  setquizType
}) => {
  const accessQuiz = useQuizData('../starter-code/data.json')
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
    let isAnyOptionSelected = false
    let selectedOptionIdx

    for (const key in optionSelected) {
      if (optionSelected[key] === true) {
        isAnyOptionSelected = true
        selectedOptionIdx = key - 1
        break
      }
    }

    if (!isAnyOptionSelected) {
      seterrorMsg('Please select an answer')
      return
    } else {
      seterrorMsg('')
    }

    if (
      correctAnswer ==
      accessQuiz.quizzes[3].questions[quesCounter].options[selectedOptionIdx]
    ) {
      setquizScore(quizScore + 1)
    }

    setisCorrect(
      correctAnswer ==
        accessQuiz.quizzes[3].questions[quesCounter].options[selectedOptionIdx]
    )

    setisSubmit(true)
    setselectedOption(selectedOptionIdx)
  }

  const incrementQuesCounter = () => {
    setquesCounter(quesCounter + 1)
    setoptionSelected({
      1: false,
      2: false,
      3: false,
      4: false,
    })
    setisCorrect(null)
    setisSubmit(false)
    setselectedOption(null)
  }

  return (
    <div
      id={toggleDark ? 'welcome-dark-container' : 'welcome-container'}
      className="h-[100vh] w-[100%] flex-col justify-center items-center bg-slate-100"
    >
      {accessQuiz ? (
        <>
          <div className="flex items-center justify-between py-9 w-[95%] m-auto">
            <QuizHeader
              imgSrc={Access}
              headerTitle="Accessibility"
              width="w-[12%]"
              iconBg="bg-pink-100"
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
            {quesCounter === accessQuiz.quizzes[3].questions.length ? (
              <QuizScore
                quizScore={quizScore}
                setquizScore={setquizScore}
                title="Accessibility"
                icon={Access}
                total={accessQuiz.quizzes[3].questions.length}
                setquesCounter={setquesCounter}
                setisCorrect={setisCorrect}
                setisSubmit={setisSubmit}
                setoptionSelected={setoptionSelected}
                setselectedOption={setselectedOption}
                iconBg="bg-pink-100"
                toggleDark={toggleDark}
                setquizType={setquizType}
              />
            ) : (
              <>
                <QuestionComponent
                  questionNumber={quesCounter}
                  totalQuestion={accessQuiz.quizzes[3].questions.length}
                  question={
                    accessQuiz.quizzes[3].questions[quesCounter].question
                  }
                  toggleDark={toggleDark}
                />
                <div>
                  {accessQuiz.quizzes[3].questions[quesCounter].options.map(
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
                          accessQuiz.quizzes[3].questions[quesCounter].answer
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
                        accessQuiz.quizzes[3].questions[quesCounter].answer
                      }
                    />
                  ) : (
                    <ButtonUtil
                      buttonContent="Next Answer"
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
export default AccessibilityQuiz
