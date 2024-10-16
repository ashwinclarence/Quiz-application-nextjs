"use client";

import {
  incrementScore,
  QuestionType,
  setNextQuestionIndex,
} from "@/app/lib/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import React, { useState } from "react";

export default function QuestionQuiz({
  correctAnswer,
  id,
  options,
  question,
}: QuestionType) {
  const dispatch = useAppDispatch();

  const currentQuestionIndex = useAppSelector(
    (state) => state.quiz.currentQuestionIndex
  ) as number;

  const workoutQuestionCount = useAppSelector(
    (state) => state.quiz.workoutQuestionCount
  ) as number;

  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(
    null
  );
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);

  // function to handle the correct answer check
  const handleSubmitAnswer = (answer: string) => {
    try {
      if (isAnswerSubmitted) return;
      setIsAnswerSubmitted(true);
      if (answer === correctAnswer) {
        dispatch(incrementScore());
      }
      // call the function to make the correct answer green
      getCorrectAnswerIndex();
      setTimeout(() => {
        dispatch(setNextQuestionIndex());
        setCorrectAnswerIndex(null);
        setIsAnswerSubmitted(false);
      }, 1000);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // function to find the correct index
  const getCorrectAnswerIndex = () => {
    try {
        let correctIndex:number =Number(options.indexOf(correctAnswer));
        setCorrectAnswerIndex(correctIndex);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // decode the encoded questions
  const parser = new DOMParser();
  const decodedQuestion = parser.parseFromString(question, 'text/html').body.textContent;


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center">
            Question {currentQuestionIndex + 1} of {workoutQuestionCount}
          </h2>
          <p className="mt-4 text-lg">{decodedQuestion}</p>

          <div className="mt-6 space-y-4">
            {options.map((option, index) => (
              <button
                key={index}
                className={`w-full px-4 py-2 text-white rounded ${
                  !isAnswerSubmitted && " hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  isAnswerSubmitted
                    ? correctAnswerIndex === index
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-blue-500"
                }`}
                onClick={() => handleSubmitAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
