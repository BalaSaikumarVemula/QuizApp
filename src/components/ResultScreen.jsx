import React from 'react';

export default function ResultScreen({ score, total, onRestart }) {
  return (
    <div className="screen">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="mb-4">Your Score: {score} / {total}</p>
      <button onClick={onRestart} className="bg-green-500 text-white px-4 py-2 rounded">
        Play Again
      </button>
    </div>
  );
}
