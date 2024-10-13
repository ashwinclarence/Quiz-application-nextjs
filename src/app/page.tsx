"use client";

import DropDownMenu from "@/components/dropDownMenu";
import QuestionCountDropDown from "@/components/questionCount";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { QuestionType, setQuestions } from "./lib/features/quiz/quizSlice";

export type CategoryType = {
  name: string;
  id: number;
};

export default function Home() {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.quiz.category);
  const selectedQuestionsCount = useAppSelector((state) => state.quiz.workoutQuestionCount);
  const getCategory = useCallback(async() => {
    try {
      let response = await axios.get("https://opentdb.com/api_category.php");
      setCategory([...response.data.trivia_categories]);
    } catch (error: any) {
      console.log(error.message);
    }
  }, [])
  

  useEffect(() => {
    getCategory();
  }, [getCategory]);


  // function to start the quiz
  const handleStartQuiz = async(e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      let response = await axios.get(`https://opentdb.com/api.php?amount=${selectedQuestionsCount}&category=${selectedCategory}`);

      console.log(response.data.results);


      // this is the answers shuffle algorithm called Fisher-Yates (Knuth) Shuffle algorithm, 
      const shuffleAnswers = (answers:string[]) => {
        for (let i = answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return answers;
      }
      
      // validate the number of question that we got as per the request
      if (response.data.results.length === selectedQuestionsCount) {
        // make the response in our format
        let responseData: QuestionType[] = response.data.results.map((res:any,index:number) => {
          const options = shuffleAnswers([res.correct_answer, ...res.incorrect_answers]);
          
          return {
            id: index + 1,
            question: res.question,
            options,
            correctAnswer: res.correct_answer
          }
        })   

        // set the questions in the store
        dispatch(setQuestions(responseData))
        router.push('/quiz');
        
      } else {
        toast.error("Something Went wrong. Cannot get the question for you at the moment please try again later");
      }
      
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <form className="flex flex-col items-center justify-center min-h-screen container mx-auto" onSubmit={handleStartQuiz}>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Test Your Knowledge in a Flash!{" "}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Put your brain to the test with QuizPulse—a fun, fast-paced quiz
        platform. Explore a wide range of topics, challenge yourself, and see
        how quickly you can score. Compete with friends, track your progress,
        and keep your mind sharp. Ready for the challenge? Jump into QuizPulse
        now!
      </p>
      <div className="flex justify-center gap-8 my-8">
        <DropDownMenu title="Category" values={[...category]} />
        <QuestionCountDropDown />
      </div>
      <button type="submit"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Start Quiz
      </button>
    </form>
  );
}
