/* eslint-disable react/prop-types */
const OptionCard = ({
  idx,
  isSubmit,
  isCorrect,
  option,
  selectedOption,
  optionSelected,
  answer,
  handleoptionSelection,
  toggleDark
}) => {
  return (
    <div
      className={`mb-10 text-xl py-3 px-3 w-[650px] rounded-xl flex items-center xl:w-[550px] xl:mx-auto lg:w-[100%] ${
        toggleDark ? 'card-dark' : 'bg-white'
      } shadow-md duration-500 ease-in-out transition-all cursor-pointer hover:scale-110 ${
        isSubmit && !isCorrect && selectedOption === idx ? 'wrongOption' : ''
      }`}
      id={isSubmit && option === answer ? 'correctOption' : null}
      style={{
        border: optionSelected[idx + 1] ? '1px solid #c026d3' : 'none',
      }}
      onClick={() => handleoptionSelection(idx + 1)}
    >
      <p
        className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 ${
          isSubmit && !isCorrect && selectedOption === idx
            ? 'wrongOptionContent'
            : ''
        }`}
        id={isSubmit && option === answer ? 'correctOptionContent' : null}
        style={{
          backgroundColor: optionSelected[idx + 1]
            ? '#c026d3'
            : 'rgb(229,231,235)',
          color: optionSelected[idx + 1] ? '#fff' : 'black',
        }}
      >
        {String.fromCharCode(65 + idx)}
      </p>
      <p className="ml-6">{option}</p>
    </div>
  )
}
export default OptionCard
