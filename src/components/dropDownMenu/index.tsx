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
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
          <SelectContent>
              {values.map((ele) => (
                  <SelectItem key={ele.id} value={ele.name}>{ele.name}</SelectItem>
              ))}
      </SelectContent>
    </Select>
  );
}
