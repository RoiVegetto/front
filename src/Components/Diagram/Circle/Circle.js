import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Circle.css';

const data = [{ name: 'Rempli', value: 12 }];

const CircleChart = () => {
  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ['red', 'transparent'];

  return (
    <div className="container-circle">
      <ResponsiveContainer width={258} height={263}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            innerRadius="70%"
            outerRadius="80%"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CircleChart;
