/* eslint-disable react/prop-types */
import Sun from '../../starter-code/assets/images/icon-sun-dark.svg'
import Moon from '../../starter-code/assets/images/icon-moon-dark.svg'
import DarkSun from '../../starter-code/assets/images/icon-sun-light.svg'
import DarkMoon from '../../starter-code/assets/images/icon-moon-light.svg'

const ToggleTheme = ({ position, display, toggleDark, settoggleDark }) => {
  const handledarkMode = () => {
    settoggleDark(!toggleDark)
  }
  return (
    <div
      className={`${position} ${display} ${
        position === 'absolute' ? 'top-16 right-[10%]' : null
      } ${position === 'absolute' ? 'sm:right-[5%]' : null}`}
    >
      <img src={toggleDark ? DarkSun : Sun} alt="sun" />
      <div
        className="bg-purple-800 h-[30px] w-[65px] rounded-full mx-4"
        onClick={handledarkMode}
      >
        <div
          className="bg-white h-[25px] w-[25px] rounded-full absolute top-[50%] translate-y-[-50%] mx-1 transition-all duration-500 cursor-pointer"
          style={{ left: toggleDark ? '72px' : '40px' }}
        ></div>
      </div>
      <img src={toggleDark ? DarkMoon : Moon} alt="moon" />
    </div>
  )
}
export default ToggleTheme
