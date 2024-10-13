"use client";

import { useRouter } from "next/navigation";
import { resetQuiz } from "../lib/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { useEffect, useState } from "react";

export default function ScorePage() {
    const [quizStatus, setQuizStatus] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const router = useRouter();

  const initialScore = useAppSelector((state) => state.quiz.score) as number;
  const workoutQuestionCount = useAppSelector(
    (state) => state.quiz.workoutQuestionCount
  ) as number;

  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    // Update score after the component mounts
    setScore(initialScore);
    if (score > Math.floor(workoutQuestionCount / 2)) {
      setQuizStatus(true);
    } else {
      setQuizStatus(false);
    }
  }, [initialScore]);
    
    
    // function to handle reset the quiz from score board
    const handleResetQuiz = () => {
        try {
            dispatch(resetQuiz());
            router.push('/');
        } catch (error:any) {
            console.log(error.message);
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-6 flex items-center flex-col gap-8 bg-white">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Quiz Score Overview
        </h5>
        <p className="text-sm">
          {quizStatus
            ? "Congrats! Your hard work paid off! Keep challenging yourself with more quizzes!"
            : "Don't give up! Every setback is a setup for a comeback. Keep trying, and you'll improve!"}
        </p>
        <p
          className={`font-normal text-gray-700 dark:text-gray-400 text-5xl w-40 h-40 rounded-full flex items-center justify-center border-${
            quizStatus ? "green" : "red"
          }-600 border-4`}
        >
          {score}/{workoutQuestionCount}
        </p>
        <button type="button" onClick={handleResetQuiz} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</button>
      </div>
    </div>
  );
}
