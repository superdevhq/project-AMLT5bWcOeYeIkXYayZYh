
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  negative?: boolean;
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  negative = false,
  className = ""
}: MetricCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-sm ${negative ? 'text-red-500' : 'text-green-500'}`}>
          {change}
        </p>
      </CardContent>
    </Card>
  );
};
