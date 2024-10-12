import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropDownType = {
    title: string;
    values: string[];
};

export default function DropDownMenu({ title,values }: DropDownType) {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
          <SelectContent>
              {values.map((ele) => (
                  <SelectItem value={ele}>{ele}</SelectItem>
              ))}
      </SelectContent>
    </Select>
  );
}
