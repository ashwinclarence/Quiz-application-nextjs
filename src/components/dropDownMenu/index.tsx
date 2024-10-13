import { setCategory } from "@/app/lib/features/quiz/quizSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { CategoryType } from "@/app/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropDownType = {
    title: string;
    values: CategoryType[];
};



export default function DropDownMenu({ title,values }: DropDownType) {
  const dispatch = useAppDispatch();
  const handleSelectCategory = (id:number,category:string) => {
    dispatch(setCategory(category));
  }
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
          <SelectContent>
              {values.map((ele) => (
                  <SelectItem key={ele.id} value={ele.name} onClick={()=>handleSelectCategory(ele.id,ele.name)}>{ele.name}</SelectItem>
              ))}
      </SelectContent>
    </Select>
  );
}
