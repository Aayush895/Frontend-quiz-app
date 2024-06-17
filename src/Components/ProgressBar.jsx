/* eslint-disable react/prop-types */
const ProgressBar = ({ questionNumber, toggleDark }) => {
  return (
    <div
      className={`w-[650px] h-[1rem] rounded-lg absolute top-[86%] xl:w-[500px] lg:w-[100%] ${
        toggleDark ? 'bg-[#3b4d66]' : 'bg-white'
      }`}
    >
      <div
        className={`h-[1rem] bg-purple-800 rounded-lg`}
        style={{ width: `${(questionNumber / 10) * 100}%` }}
      ></div>
    </div>
  )
}
export default ProgressBar
