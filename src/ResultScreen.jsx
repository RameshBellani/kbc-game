import React from 'react';

interface ResultScreenProps {
  answerStatus: string;
  correctPlayer: string;
  onNextQuestion: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ answerStatus, correctPlayer, onNextQuestion }) => {
  return (
    <div className="result-section">
      {answerStatus === 'correct' ? (
        <h2>Congratulations, {correctPlayer}! You answered correctly!</h2>
      ) : (
        <h2>Wrong answer! Better luck next time.</h2>
      )}
      <button onClick={onNextQuestion}>Next Question</button>
    </div>
  );
};

export default ResultScreen;
