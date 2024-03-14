import React, { useState, useEffect } from "react";
import Container from "../Utils/Container";
import ToggleButton from "../Welcome/ToggleButton";

const HtmlQuiz = () => {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("../../../data.json");
    const jsonData = await data.json();

    console.log(jsonData);
  }

  return (
    <Container>
      <ToggleButton />
      <div>
        <div id="question">Question</div>
        <div id="progress-bar">Progress</div>
      </div>
      <div id="answer-container">
        <div>Answer-1</div>
        <div>Answer-2</div>
        <div>Answer-3</div>
        <div>Answer-4</div>
      </div>
    </Container>
  );
};

export default HtmlQuiz;
