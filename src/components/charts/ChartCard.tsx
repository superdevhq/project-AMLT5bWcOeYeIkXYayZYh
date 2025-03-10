
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartCardProps {
  title: string;
  chart: ReactNode;
  className?: string;
}

export const ChartCard = ({ title, chart, className = "" }: ChartCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {chart}
      </CardContent>
    </Card>
  );
};
