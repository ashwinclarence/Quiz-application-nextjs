'use client';

import QuestionQuiz from "@/components/quizQuestion";
import React, { useEffect } from "react";
import { useAppSelector } from "../lib/hooks";
import { QuestionType } from "../lib/features/quiz/quizSlice";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const questions = useAppSelector((state) => state.quiz.questions) as QuestionType[];
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex) as number;
  const workoutQuestionCount = useAppSelector((state) => state.quiz.workoutQuestionCount) as number;

  const route = useRouter();

  useEffect(() => {
    if (currentQuestionIndex+1 >= workoutQuestionCount) {
      route.push('/score');
    }
  
},[currentQuestionIndex,workoutQuestionCount])

  return (
    <>
      <QuestionQuiz id={questions[currentQuestionIndex].id} question={questions[currentQuestionIndex].question} options={[...questions[currentQuestionIndex].options]} correctAnswer={questions[currentQuestionIndex].correctAnswer}/>
    </>
  );
}
