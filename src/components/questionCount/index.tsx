import { useAppSelector } from "@/app/lib/hooks";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function QuestionCountDropDown() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  let totalQuestionCount = useAppSelector((state) => state.quiz.totalQuestions);

  useEffect(() => {
    if (totalQuestionCount as number <= 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
      }
  }, [totalQuestionCount]);
    
    
  return (
    <Input
      placeholder={`Select max of ${totalQuestionCount} questions`}
      disabled={disabled}
    />
  );
}
