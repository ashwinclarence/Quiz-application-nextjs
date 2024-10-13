"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type QuestionType = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;

}

export default function Page() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    async function getQuestions() {
      try {
        let response = await axios.get("https://opentdb.com/api.php?amount=10");
        console.log("🚀 ~ file: page.tsx:9 ~ getQuestions ~ response:", response);

        setQuestions(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getQuestions();
  }, []);

  return (
    <div>
      {questions.map((ele, index) => (
        <div key={index}>
          <h3>{ele.question}</h3>
          <p>Correct Answer: {ele.correct_answer}</p>
          <p>Options: {ele.incorrect_answers.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
