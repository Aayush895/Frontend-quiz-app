import ProgressBar from '../Components/ProgressBar'

/* eslint-disable react/prop-types */
const QuestionComponent = ({
  questionNumber,
  totalQuestion,
  question,
  toggleDark,
}) => {
  return (
    <div className="w-[50%] relative xl:w-[40%] lg:mb-28 lg:w-[100%]">
      <div className="lg:mb-36">
        <p
          className={`italic mb-14 ${
            toggleDark ? 'para-dark-color' : 'para-color'
          }`}
        >
          Question {questionNumber + 1} from {totalQuestion}
        </p>
        <h1
          className="text-3xl"
          style={{ color: toggleDark ? 'white' : '#313e51' }}
        >
          {question}
        </h1>
      </div>
      <ProgressBar
        questionNumber={questionNumber + 1}
        toggleDark={toggleDark}
      />
    </div>
  )
}
export default QuestionComponent
