/* eslint-disable react/prop-types */
const ButtonUtil = ({ buttonContent, btnFunction, correctAnswer }) => {
  return (
    <button
      className="mb-10 text-xl py-3 px-3 w-[650px] rounded-xl shadow-md duration-500 ease-in-out transition-all cursor-pointer text-center bg-purple-500 hover:bg-purple-400 text-white xl:w-[550px] xl:mx-auto lg:w-[100%]"
      onClick={() => btnFunction(correctAnswer)}
    >
      {buttonContent}
    </button>
  )
}
export default ButtonUtil