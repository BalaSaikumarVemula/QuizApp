import React from 'react';

export default function StartScreen({ onStart }) {
  return (
    <div className="screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz!</h1>
      <button onClick={onStart} className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Quiz
      </button>
    </div>
  );
}
