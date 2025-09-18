import React, { useState } from "react";
import "./Quiz.css";

function Quiz({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [_selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct) {
      setFeedback(true);
    } else {
      setFeedback(false);
    }
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setFeedback(null);
  };

  if (!currentQuestion) return <p>Parabéns! Você terminou o quiz.</p>;

  return (
    <div className="quiz">
      <p className="quiz-question">{currentQuestion.question}</p>
      <div className="quiz-buttons">
        {currentQuestion.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            disabled={feedback === true} // Não deixa responder de novo se acertou
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback !== null && (
        <p className={feedback ? "correct" : "wrong"}>
          {feedback
            ? "✔️ Corretíssimo!"
            : "❌ Errado! Tente novamente."}
        </p>
      )}
      {feedback === true && currentIndex < questions.length - 1 && (
        <button className="next-btn" onClick={nextQuestion}>
          Próxima Pergunta
        </button>
      )}
    </div>
  );
}

export default Quiz;
