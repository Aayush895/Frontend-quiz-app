import React, { useState, useEffect } from "react";
import Container from "../Utils/Container";
import ToggleButton from "../Welcome/ToggleButton";
import Subject from "../Utils/Subject";

const HtmlQuiz = () => {
  const [ques, setQues] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("../../../data.json");
    const jsonData = await data.json();

    setQues(jsonData?.quizzes[0]);
  }

  return (
    <Container>
      <div className="flex justify-around w-[100%] mt-20">
        <Subject
          subject={ques?.title}
          src={"../../assets/images/icon-html.svg"}
        />
        <ToggleButton />
        {!ques ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div>
              <div id="question" className="mb-16">
                <p className="italic mb-4">Question 1 out of 10</p>
                <h2 className="font-semibold text-3xl">
                  {ques?.questions[0]?.question}
                </h2>
              </div>
              <div id="progress-bar">Progress Component</div>
            </div>
            <div id="answer-container">
              {/* Map over the options */}

              {ques.questions[0].options.map((item, idx) => {
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
                );
              })}
              <button className="bg-purple-700 text-white flex items-center justify-center w-[24rem] px-2 py-3 rounded-2xl shadow-lg cursor-pointer hover:scale-105 duration-500 ease-in-out mb-5 font-semibold hover:bg-purple-400">
                Submit Answer
              </button>
              {/* <div>Answer-1</div>
            <div>Answer-2</div>
            <div>Answer-3</div>
            <div>Answer-4</div> */}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default HtmlQuiz;
