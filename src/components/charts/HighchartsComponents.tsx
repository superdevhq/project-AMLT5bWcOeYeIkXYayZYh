
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Import modules properly
import HighchartsMoreModule from "highcharts/highcharts-more";
import HighchartsSolidGaugeModule from "highcharts/modules/solid-gauge";
import HighchartsExportingModule from "highcharts/modules/exporting";

// Initialize the additional modules correctly
if (typeof window !== 'undefined') {
  HighchartsMoreModule(Highcharts);
  HighchartsSolidGaugeModule(Highcharts);
  HighchartsExportingModule(Highcharts);
}

// Line Chart Component
export const LineChart = () => {
  const options = {
    chart: {
      type: 'line',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Revenue ($)'
      }
    },
    series: [{
      name: 'Revenue',
      data: [12500, 14250, 16800, 15300, 17650, 19800, 18500, 20700, 22400, 24100, 23500, 25800],
      color: '#8884d8'
    }],
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Pie Chart Component
export const PieChart = () => {
  const options = {
    chart: {
      type: 'pie',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: null
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Users',
      colorByPoint: true,
      data: [
        { name: 'Desktop', y: 61.41 },
        { name: 'Mobile', y: 28.84 },
        { name: 'Tablet', y: 9.75 }
      ]
    }],
    credits: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Column Chart Component
export const ColumnChart = () => {
  const options = {
    chart: {
      type: 'column',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4']
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [
      {
        name: 'Sales',
        data: [49.9, 71.5, 106.4, 129.2],
        color: '#8884d8'
      },
      {
        name: 'Expenses',
        data: [42.4, 33.2, 34.5, 39.7],
        color: '#82ca9d'
      }
    ],
    credits: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Area Chart Component
export const AreaChart = () => {
  const options = {
    chart: {
      type: 'area',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: 'Response Time (ms)'
      }
    },
    tooltip: {
      valueSuffix: ' ms'
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#666666'
        }
      }
    },
    series: [{
      name: 'API Response',
      data: [502, 635, 809, 947, 1402, 3634, 5268],
      color: '#8884d8'
    }, {
      name: 'Database Query',
      data: [106, 107, 111, 133, 221, 767, 1766],
      color: '#82ca9d'
    }],
    credits: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Gauge Chart Component
export const GaugeChart = () => {
  const options = {
    chart: {
      type: 'solidgauge',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: null
    },
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
    tooltip: {
      enabled: false
    },
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70
      },
      labels: {
        y: 16
      },
      min: 0,
      max: 100
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    },
    series: [{
      name: 'CPU',
      data: [68],
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}%</span><br/><span style="font-size:12px;color:silver">CPU Usage</span></div>'
      }
    }],
    credits: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Scatter Chart Component
export const ScatterChart = () => {
  const options = {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: null
    },
    xAxis: {
      title: {
        text: 'Age'
      }
    },
    yAxis: {
      title: {
        text: 'Spending ($)'
      }
    },
    series: [{
      name: 'Male',
      color: 'rgba(119, 152, 191, .5)',
      data: [[16, 51], [17, 59], [18, 63], [19, 58], [20, 71], [21, 84], [22, 93], [23, 89], [24, 95], [25, 102], 
             [26, 109], [27, 115], [28, 126], [29, 129], [30, 140], [31, 147], [32, 159], [33, 168], [34, 177], [35, 185]]
    }, {
      name: 'Female',
      color: 'rgba(223, 83, 83, .5)',
      data: [[16, 75], [17, 78], [18, 88], [19, 94], [20, 99], [21, 104], [22, 110], [23, 117], [24, 125], [25, 132], 
             [26, 140], [27, 147], [28, 155], [29, 162], [30, 170], [31, 178], [32, 184], [33, 190], [34, 199], [35, 205]]
    }],
    credits: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Bubble Chart Component
export const BubbleChart = () => {
  const options = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: null
    },
    xAxis: {
      gridLineWidth: 1,
      title: {
        text: 'Market Share'
      }
    },
    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: 'Growth Rate'
      }
    },
    series: [{
      name: 'Products',
      data: [
        [9, 81, 63],
        [98, 5, 89],
        [51, 50, 73],
        [41, 22, 14],
        [58, 24, 20],
        [78, 37, 34],
        [55, 56, 53],
        [18, 45, 70],
        [42, 44, 28],
        [3, 52, 59],
        [31, 18, 97],
        [79, 91, 63],
        [93, 23, 23],
        [44, 83, 22]
      ],
      colorByPoint: true
    }],
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: 'Market Share: {point.x}%<br>Growth Rate: {point.y}%<br>Revenue: ${point.z}k'
    },
    credits: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
