import { Badge } from "@/components/ui/badge";

const CategoryTags = ({ categories }: { categories: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 border border-gray-200 shadow-md rounded-md w-fit">
      {categories.map((category) => (
        <Badge key={category} className="px-3 py-1 text-sm bg-green-300">
          <span className=" text-green-700">{category}</span>
        </Badge>
      ))}
    </div>
  );
};

export default CategoryTags;
