/* eslint-disable react/prop-types */
const QuizHeader = ({ imgSrc, headerTitle, width, iconBg, toggleDark }) => {
  return (
    <div className={`flex items-center justify-between ${width}`}>
      <img
        src={imgSrc}
        alt="html-icon"
        className={`rounded-md ${iconBg} p-1`}
      />
      <h1
        className="text-2xl xl:px-8 sm:px-0"
        style={{ color: toggleDark ? '#fff' : '#313e51' }}
      >
        {headerTitle}
      </h1>
    </div>
  )
}
export default QuizHeader
