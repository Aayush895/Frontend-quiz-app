import { useState } from "react";
import ToggleButton from "../Utils/ToggleButton";
import HtmlQuiz from "../Html/HtmlQuiz";
import Container from "../Utils/Container";

const Introduction = () => {
  const [quiz, setQuiz] = useState({
    html: false,
    css: false,
    js: false,
    access: false,
  });

  function handleQuiz(e) {
    if (e.target.innerText == "HTML") {
      setQuiz({ ...quiz, html: true });
    } else if (e.target.innerText == "CSS") {
      setQuiz({ ...quiz, html: false, css: true });
    } else if (e.target.innerText == "Javascript") {
      setQuiz({ ...quiz, html: false, css: false, js: true });
    } else {
      setQuiz({ ...quiz, html: false, css: false, js: false, access: true });
    }
  }

  if (quiz.html) {
    return <HtmlQuiz />;
  }

  return (
    <Container>
      <div className="flex justify-around w-[100%]">
        <ToggleButton />
        <div className="px-2 py-3 w-[17rem] text-left">
          <h1 className="text-4xl">
            Welcome to the <span className="font-bold">Frontend Quiz!</span>
          </h1>
          <p className="mt-10 italic text-cyan-900">
            Pick a subject to get started.
          </p>
        </div>

        <div>

          <div
            className="btn flex items-center justify-start w-[24rem] px-2 py-3 rounded-2xl shadow-lg bg-white cursor-pointer hover:scale-105 duration-500 ease-in-out"
            onClick={handleQuiz}
          >
            <img
              src="../../assets/images/icon-html.svg"
              alt="HTML-logo"
              className="bg-red-200 rounded-md shadow-sm"
            />
            <div className="ml-7">
              <h1 className="font-bold">HTML</h1>
            </div>
          </div>

          <div
            className="btn flex items-center justify-start mt-8 px-2 py-3 rounded-2xl shadow-lg bg-white cursor-pointer hover:scale-105 duration-500 ease-in-out"
            onClick={handleQuiz}
          >
            <img
              src="../../assets/images/icon-css.svg"
              alt="CSS-logo"
              className="bg-green-200 rounded-md shadow-sm"
            />
            <div className="ml-7">
              <h1 className="font-bold">CSS</h1>
            </div>
          </div>

          <div
            className="btn flex items-center justify-start mt-8 px-2 py-3 rounded-2xl shadow-lg bg-white cursor-pointer hover:scale-105 duration-500 ease-in-out"
            onClick={handleQuiz}
          >
            <img
              src="../../assets/images/icon-js.svg"
              alt="js-logo"
              className="bg-blue-200 rounded-md shadow-sm"
            />
            <div className="ml-7">
              <h1 className="font-bold">Javascript</h1>
            </div>
          </div>

          <div
            className="btn flex items-center justify-start mt-8 px-2 py-3 rounded-2xl shadow-lg bg-white cursor-pointer hover:scale-105 duration-500 ease-in-out"
            onClick={handleQuiz}
          >
            <img
              src="../../assets/images/icon-accessibility.svg"
              alt="access-logo"
              className="rounded-md shadow-sm bg-purple-200"
            />
            <div className="ml-7">
              <h1 className="font-bold">Accessibility</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Introduction;
