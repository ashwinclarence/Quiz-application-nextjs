import {
  setCategory,
  setTotalQuestionCount,
} from "@/app/lib/features/quiz/quizSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { CategoryType } from "@/app/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

type DropDownType = {
  title: string;
  values: CategoryType[];
};

export default function DropDownMenu({ title, values }: DropDownType) {
  const dispatch = useAppDispatch();

  // function to select category
  const handleSelectCategory = (id: number) => {
    dispatch(setCategory(id));
    handleFindQuestionCount(id);
  };


  // function to find the number of question in the category
  const handleFindQuestionCount = async (id: number) => {
    try {
      let response = await axios.get(
        `https://opentdb.com/api_count.php?category=${id}`
      );

      if (response.data.category_question_count.total_question_count) {
        dispatch(
          setTotalQuestionCount(
            response.data.category_question_count.total_question_count
          )
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Select onValueChange={(value) => {
      const selectedCategory = values.find(ele => ele.name === value);
      if (selectedCategory) {
        handleSelectCategory(selectedCategory.id)
      }
      
    }}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent >
        {values.map((ele) => (
          <SelectItem
            key={ele.id}
            value={ele.name}
          >
            {ele.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
