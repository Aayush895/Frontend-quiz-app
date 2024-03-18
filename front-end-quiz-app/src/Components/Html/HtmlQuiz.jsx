import { useState, useEffect } from 'react'
import Container from '../Utils/Container'
import ToggleButton from '../Utils/ToggleButton'
import Subject from '../Utils/Subject'
import ProgressBar from '../Utils/ProgressBar'

const HtmlQuiz = () => {
  const [ques, setQues] = useState(null)
  const [quesNumber, setQuesNumber] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await fetch('../../../data.json')
    const jsonData = await data.json()

    setQues(jsonData?.quizzes[0])
  }

  // Put the handlequestion function inside the setTimeout function in react in order to update the quesNumber state after some specified time. The setTimeout function will be inside the useEffect hook
  const handleQuestion = () => {
    setQuesNumber(quesNumber + 1)
  }

  return (
    <Container>
      <div className="flex justify-around w-[100%] mt-20">
        <Subject
          subject={ques?.title}
          src={'../../assets/images/icon-html.svg'}
        />
        <ToggleButton />
        {!ques ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="w-[30%]">
              <div id="question" className="mb-56">
                <p className="italic mb-4">
                  Question {quesNumber + 1} out of 10
                </p>
                <h2 className="font-semibold text-3xl">
                  {ques?.questions[quesNumber]?.question}
                </h2>
              </div>
              <div id="progress-bar">
                <ProgressBar progressFiller={(quesNumber + 1) * 10} />
              </div>
            </div>
            <div id="answer-container">
              {ques.questions[quesNumber].options.map((item, idx) => {
                return (
                  <div
                    className="flex items-center justify-start w-[24rem] px-2 py-3 rounded-2xl shadow-lg bg-white cursor-pointer hover:scale-105 duration-500 ease-in-out mb-5"
                    key={idx}
                  >
                    <p className="rounded-md shadow-sm w-[40px] h-[40px] text-center flex justify-center items-center bg-slate-200 text-slate-500 ">
                      {idx + 1}
                    </p>
                    <p className="ml-3">{item}</p>
                  </div>
                )
              })}

              <button
                className="bg-purple-700 text-white flex items-center justify-center w-[24rem] px-2 py-3 rounded-2xl shadow-lg hover:scale-105 duration-500 ease-in-out mb-5 font-semibold hover:bg-purple-400"
                style={{
                  cursor:
                    quesNumber == ques?.questions.length - 1
                      ? 'no-drop'
                      : 'pointer',
                }}
                onClick={handleQuestion}
                disabled={quesNumber == ques?.questions.length - 1}
              >
                Submit Answer
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  )
}

export default HtmlQuiz
