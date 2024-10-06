import React, { useState } from 'react';

interface QuestionScreenProps {
  players: string[];
  currentQuestion: {
    question: string;
    options: string[];
    answer: string;
  };
  onSubmitAnswer: (playerName: string, answer: string) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ players, currentQuestion, onSubmitAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const player = players[0]; // No need to use useState here

  const handleSubmit = () => {
    if (selectedAnswer) {
      onSubmitAnswer(player, selectedAnswer);
    }
  };

  return (
    <div className="question-section">
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="answer"
              value={option[0]}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </label>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default QuestionScreen;
