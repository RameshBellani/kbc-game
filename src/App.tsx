import React, { useState } from 'react';
import QRCodeScreen from './QRCodeScreen.jsx';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen.jsx';
import PlayerJoin from './PlayerJoin';
import './App.css';

const questions = [
    {
      question: 'What is the capital of France?',
      options: ['A. Berlin', 'B. Madrid', 'C. Paris', 'D. Rome'],
      answer: 'C',
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['A. Harper Lee', 'B. J.K. Rowling', 'C. Ernest Hemingway', 'D. Mark Twain'],
      answer: 'A',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['A. O2', 'B. H2O', 'C. CO2', 'D. NaCl'],
      answer: 'B',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['A. Venus', 'B. Mars', 'C. Jupiter', 'D. Saturn'],
      answer: 'B',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['A. Elephant', 'B. Blue Whale', 'C. Shark', 'D. Giraffe'],
      answer: 'B',
    },
  ];

const App: React.FC = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState('');
  const [correctPlayer, setCorrectPlayer] = useState('');
  const [currentView, setCurrentView] = useState('join'); // tracks which view to show (join, question, result)

  const currentQuestion = questions[currentQuestionIndex];

  // Handle player join
  const handlePlayerJoin = (playerName: string) => {
    setPlayers([playerName]);
    setCurrentView('question');
  };

  // Handle answer submission
  const handleSubmitAnswer = (playerName: string, answer: string) => {
    if (answer === currentQuestion.answer) {
      setCorrectPlayer(playerName);
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
    }
    setCurrentView('result');
  };

  // Move to next question
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setCurrentView('question');
    setAnswerStatus('');
    setCorrectPlayer('');
  };

  return (
    <div className="App">
      {currentView === 'join' && (
        <>
          <QRCodeScreen />
          <PlayerJoin onJoin={handlePlayerJoin} />
        </>
      )}

      {currentView === 'question' && (
        <QuestionScreen
          players={players}
          currentQuestion={currentQuestion}
          onSubmitAnswer={handleSubmitAnswer}
        />
      )}

      {currentView === 'result' && (
        <ResultScreen
          answerStatus={answerStatus}
          correctPlayer={correctPlayer}
          onNextQuestion={nextQuestion}
        />
      )}
    </div>
  );
};

export default App;
