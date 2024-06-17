/* eslint-disable react/prop-types */
const QuizTopic = ({ quizType, handleQuizType, icon, color, toggleDark }) => {
  return (
    <div
      className={`flex justify-start px-3 py-2 items-center ${toggleDark ? 'card-dark' : 'bg-white'} rounded-lg mb-5 shadow-md cursor-pointer duration-500 ease-in-out hover:scale-105`}
      onClick={handleQuizType}
    >
      <img src={icon} alt="html-logo" className={`rounded-md ${color} p-1`} />
      <h1 className="mx-3" style={{color: toggleDark ? 'white' : '#313e51'}}>
        {quizType}
      </h1>
    </div>
  )
}
export default QuizTopic
