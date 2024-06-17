/* eslint-disable react/prop-types */
import QuizHeader from '../utils/QuizHeader'
import ToggleTheme from '../utils/ToggleTheme'
import CSS from '../../starter-code/assets/images/icon-css.svg'
import { useQuizData } from '../Custom/useQuizData'
import { useState } from 'react'
import QuizScore from './QuizScore'
import QuestionComponent from '../utils/QuestionComponent'
import OptionCard from '../utils/OptionCard'
import ButtonUtil from '../utils/ButtonUtil'

const CssQuiz = ({
  quizScore,
  setquizScore,
  toggleDark,
  settoggleDark,
  setquizType,
}) => {
  const cssQuiz = useQuizData('/public/data.json')
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
      cssQuiz.quizzes[1].questions[quesCounter].options[selectedOptionIdx]
    ) {
      setquizScore(quizScore + 1)
    }

    setisCorrect(
      correctAnswer ==
        cssQuiz.quizzes[1].questions[quesCounter].options[selectedOptionIdx]
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
      {cssQuiz ? (
        <>
          <div className="flex items-center justify-between py-9 w-[95%] m-auto">
            <QuizHeader
              imgSrc={CSS}
              headerTitle="CSS"
              width="w-[8%]"
              iconBg="bg-green-100"
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
            {quesCounter === cssQuiz.quizzes[1].questions.length ? (
              <QuizScore
                quizScore={quizScore}
                setquizScore={setquizScore}
                title="CSS"
                icon={CSS}
                total={cssQuiz.quizzes[1].questions.length}
                setquesCounter={setquesCounter}
                setisCorrect={setisCorrect}
                setisSubmit={setisSubmit}
                setoptionSelected={setoptionSelected}
                setselectedOption={setselectedOption}
                iconBg="bg-green-100"
                toggleDark={toggleDark}
                setquizType={setquizType}
              />
            ) : (
              <>
                <QuestionComponent
                  questionNumber={quesCounter}
                  totalQuestion={cssQuiz.quizzes[1].questions.length}
                  question={cssQuiz.quizzes[1].questions[quesCounter].question}
                  toggleDark={toggleDark}
                />
                <div>
                  {cssQuiz.quizzes[1].questions[quesCounter].options.map(
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
                          cssQuiz.quizzes[1].questions[quesCounter].answer
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
                        cssQuiz.quizzes[1].questions[quesCounter].answer
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
export default CssQuiz
