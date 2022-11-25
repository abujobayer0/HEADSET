import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 24561,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 45023,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 72615,
      revenue: 167010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 51029,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 10010,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 16700,
      revenue: 61000,
    },
  ];
  return (
    <div className="flex bg-amber-100 w-screen h-screen justify-center pt-20 gap-10 items-center flex-wrap">
      <div>
        <LineChart width={500} height={300} data={data}>
          <Line dataKey={"revenue"}></Line>
          <Line dataKey={"sell"}></Line>
          <Line dataKey={"investment"} stroke="#82ca9d"></Line>
          <CartesianGrid stroke="#82ca9d"></CartesianGrid>
          <XAxis dataKey={"month"}></XAxis>
          <Tooltip></Tooltip>
          <YAxis></YAxis>
        </LineChart>
      </div>
      <div>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="month"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="investment"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stackId="1"
            stroke="#f59e0b"
            fill="#f59e0b"
          />
        </AreaChart>
      </div>
      <div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="investment" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="month" height={30} stroke="#8884d8" />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="revenue"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
