import ButtonUtil from '../utils/ButtonUtil'
import QuizHeader from '../utils/QuizHeader'

/* eslint-disable react/prop-types */
const QuizScore = ({
  quizScore,
  setquizScore,
  title,
  icon,
  total,
  setquesCounter,
  setisCorrect,
  setisSubmit,
  setoptionSelected,
  setselectedOption,
  iconBg,
  toggleDark,
  setquizType,
}) => {
  const handleresetQuiz = () => {
    setquizScore(0)
    setquesCounter(0)
    setisCorrect(null)
    setisSubmit(false)
    setoptionSelected({
      1: false,
      2: false,
      3: false,
      4: false,
    })
    setselectedOption(null)
    setquizType({ html: false, css: false, js: false, access: false })
  }

  return (
    <div className="flex justify-between w-[100%] lg:flex-col">
      <div className="text-5xl text-[#3b4d66]">
        <h1
          className={`font-light mb-8`}
          style={{ color: toggleDark ? '#fff' : '#3b4d66' }}
        >
          Quiz Completed
        </h1>
        <h1
          className="font-semibold"
          style={{ color: toggleDark ? '#fff' : '#3b4d66' }}
        >
          You Scored...
        </h1>
      </div>
      <div className="relative lg:top-36">
        <div className="flex flex-col justify-center items-center h-96 mb-7 rounded-2xl bg-white shadow-md">
          <QuizHeader
            imgSrc={icon}
            headerTitle={title}
            width="w-[20%]"
            iconBg={iconBg}
          />
          <h1 className="mt-7 text-8xl text-center text-[#3b4d66]">
            {quizScore}
          </h1>
          <p className="mt-4 text-2xl text-center text-[#3b4d66]">
            out of {total}
          </p>
        </div>
        <ButtonUtil buttonContent="Play Again" btnFunction={handleresetQuiz} />
      </div>
    </div>
  )
}
export default QuizScore
