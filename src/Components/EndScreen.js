import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button
        onClick={() => {
          setScore(0);
          setGameState("menu");
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default EndScreen;
