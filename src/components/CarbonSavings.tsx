import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const CarbonSavings = ({ savedKg }: { savedKg: number }) => {
  const percentage = Math.min((savedKg / 100) * 100, 100); // Assuming 100kg is max

  return (
    <Card className="p-6 w-72 h-64 bg-green-100 shadow-lg rounded-2xl">
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-green-700">
          <Leaf className="w-8 h-8" />
          <h2 className="text-xl font-bold">Carbon Emissions Saved</h2>
        </div>

        <div>
          <span className="text-3xl font-bold text-green-800">{savedKg} kg</span>
        </div>

        <Progress value={percentage} className="w-full h-4 bg-green-300" />

        <p className="text-sm text-gray-700 text-center">
          Equivalent to saving {Math.round(savedKg / 2.3)} trees!
        </p>
      </CardContent>
    </Card>
  );
};

export default CarbonSavings;
