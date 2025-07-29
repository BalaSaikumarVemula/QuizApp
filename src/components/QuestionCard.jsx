import React from 'react';

export default function QuestionCard({ questionData, onAnswer, currentIndex, total }) {
  return (
    <div className="screen">
      <h2 className="text-xl font-semibold mb-4">
        Question {currentIndex + 1} of {total}
      </h2>
      <p className="mb-4">{questionData.question}</p>

      {questionData.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onAnswer(option)}
          className="option-button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
