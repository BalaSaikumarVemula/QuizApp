import React, { useState } from 'react';
import questions from './data/questions.json';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => setStarted(true);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  if (!started) return <StartScreen onStart={handleStart} />;
  if (completed) return <ResultScreen score={score} total={questions.length} onRestart={handleRestart} />;

  return (
    <QuestionCard
      questionData={questions[currentQuestion]}
      onAnswer={handleAnswer}
      currentIndex={currentQuestion}
      total={questions.length}
    />
  );
}
