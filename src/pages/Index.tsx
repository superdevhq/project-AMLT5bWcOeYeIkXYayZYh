
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { MetricCard } from "@/components/charts/MetricCard";
import { ChartCard } from "@/components/charts/ChartCard";
import { 
  LineChart, 
  PieChart, 
  ColumnChart, 
  AreaChart, 
  GaugeChart, 
  ScatterChart, 
  BubbleChart 
} from "@/components/charts/HighchartsComponents";

// Initialize Highcharts modules
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import HighchartsExporting from "highcharts/modules/exporting";

// Initialize the additional modules
if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
  HighchartsSolidGauge(Highcharts);
  HighchartsExporting(Highcharts);
}

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);

  const refreshData = () => {
    setIsLoading(true);
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <Button 
            onClick={refreshData} 
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh Data
          </Button>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MetricCard title="Total Users" value="24,532" change="+12.3%" />
              <MetricCard title="Revenue" value="$86,589" change="+5.7%" />
              <MetricCard title="Conversion Rate" value="3.42%" change="-0.8%" negative />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Monthly Revenue" chart={<LineChart />} />
              <ChartCard title="User Distribution" chart={<PieChart />} />
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <ChartCard title="Performance Metrics" chart={<ColumnChart />} />
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Server Response Time" chart={<AreaChart />} />
              <ChartCard title="Resource Usage" chart={<GaugeChart />} />
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <ChartCard title="Detailed Analytics" chart={<ScatterChart />} />
              <ChartCard title="Comparative Analysis" chart={<BubbleChart />} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
