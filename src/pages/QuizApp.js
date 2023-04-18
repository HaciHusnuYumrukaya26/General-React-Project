import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterNav from "../components/RouterNav";
import Quiz from "../quizApp/pages/quiz/Quiz.jsx";
const QuizApp = () => {
  return <div>
  

          <Route path="/quiz/quiz" element={<Quiz/>} />

  </div>;
};

export default QuizApp;
