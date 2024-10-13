import { setWorkoutQuestionCount } from "@/app/lib/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function QuestionCountDropDown() {
  const [disabled, setDisabled] = useState(false);

  let totalQuestionCount = Number(
    useAppSelector((state) => state.quiz.totalQuestions)
  );
  const dispatch = useAppDispatch();

  // if the count is zero make the input box disabled
  useEffect(() => {
    if (totalQuestionCount <= 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [totalQuestionCount]);

  return (
    <Input
      className="w-[17rem]"
      placeholder={`Select maximum of ${totalQuestionCount} questions`}
      disabled={disabled}
      type="number"
      min={totalQuestionCount >= 10 ? 10 : totalQuestionCount}
      max={totalQuestionCount}
      onChange={(e) =>
        dispatch(setWorkoutQuestionCount(Number(e.target.value)))
      }
    />
  );
}
