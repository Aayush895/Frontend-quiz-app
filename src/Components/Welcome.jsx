import { useState } from 'react'
import HTML from '../../starter-code/assets/images/icon-html.svg'
import CSS from '../../starter-code/assets/images/icon-css.svg'
import Javascript from '../../starter-code/assets/images/icon-js.svg'
import Access from '../../starter-code/assets/images/icon-accessibility.svg'
import HtmlQuiz from './HtmlQuiz'
import CssQuiz from './CssQuiz'
import JsQuiz from './JsQuiz'
import AccessibilityQuiz from './AccessibilityQuiz'
import ToggleTheme from '../utils/ToggleTheme'
import QuizTopic from '../utils/QuizTopic'

const Welcome = () => {
  const [toggleDark, settoggleDark] = useState(false)
  const [quizScore, setquizScore] = useState(0)
  const [quizType, setquizType] = useState({
    html: false,
    css: false,
    js: false,
    access: false,
  })

  const handleHtmlquiz = () => {
    setquizType({
      html: true,
      css: false,
      js: false,
      access: false,
    })
  }

  const handleCssquiz = () => {
    setquizType({
      html: false,
      css: true,
      js: false,
      access: false,
    })
  }

  const handleJsquiz = () => {
    setquizType({
      html: false,
      css: false,
      js: true,
      access: false,
    })
  }

  const handleAccessquiz = () => {
    setquizType({
      html: false,
      css: false,
      js: false,
      access: true,
    })
  }

  if (quizType.html) {
    return (
      <HtmlQuiz
        quizScore={quizScore}
        setquizScore={setquizScore}
        toggleDark={toggleDark}
        settoggleDark={settoggleDark}
        setquizType={setquizType}
      />
    )
  }

  if (quizType.css) {
    return (
      <CssQuiz
        quizScore={quizScore}
        setquizScore={setquizScore}
        toggleDark={toggleDark}
        settoggleDark={settoggleDark}
        setquizType={setquizType}
      />
    )
  }

  if (quizType.js) {
    return (
      <JsQuiz
        quizScore={quizScore}
        setquizScore={setquizScore}
        toggleDark={toggleDark}
        settoggleDark={settoggleDark}
        setquizType={setquizType}
      />
    )
  }

  if (quizType.access) {
    return (
      <AccessibilityQuiz
        quizScore={quizScore}
        setquizScore={setquizScore}
        toggleDark={toggleDark}
        settoggleDark={settoggleDark}
        setquizType={setquizType}
      />
    )
  }

  return (
    <div
      className="h-[100vh] w-[100%] flex justify-around items-center bg-slate-100 lg:h-[105vh] md:h-[100vh] sm:h-[145vh] 2xs:h-[195vh]"
      id={toggleDark ? 'welcome-dark-container' : 'welcome-container'}
    >
      <div className="flex justify-around w-[100%] py-10 lg:flex-col lg:items-center">
        <div className="xl:w-[40%] lg:w-[65%] mb-28 sm:w-[90%] xs:w-[95%] 2xs:w-[100%] 2xs:mt-12">
          <h1
            className={`text-5xl font-light mb-28 xl:mb-18 sm:mb-16 xs:text-center`}
            style={{ color: toggleDark ? '#fff' : '#313e51' }}
          >
            Welcome to the <span className="font-medium">Frontend Quiz!</span>
          </h1>
          <p
            className={`italic ${
              toggleDark ? 'para-dark-color' : 'para-color'
            } xs:text-center`}
          >
            Pick a subject to get started
          </p>
        </div>

        <div className="w-[25%] xl:w-[40%] lg:w-[65%] sm:w-[90%] xs:w-[95%]">
          <QuizTopic
            quizType="HTML"
            handleQuizType={handleHtmlquiz}
            icon={HTML}
            color="bg-red-100"
            toggleDark={toggleDark}
          />
          <QuizTopic
            quizType="CSS"
            handleQuizType={handleCssquiz}
            icon={CSS}
            color="bg-green-100"
            toggleDark={toggleDark}
          />
          <QuizTopic
            quizType="Javascript"
            handleQuizType={handleJsquiz}
            icon={Javascript}
            color="bg-blue-100"
            toggleDark={toggleDark}
          />
          <QuizTopic
            quizType="Accessibility"
            handleQuizType={handleAccessquiz}
            icon={Access}
            color="bg-pink-200"
            toggleDark={toggleDark}
          />
        </div>
      </div>
      <ToggleTheme
        position="absolute"
        display="flex"
        toggleDark={toggleDark}
        settoggleDark={settoggleDark}
      />
    </div>
  )
}
export default Welcome
