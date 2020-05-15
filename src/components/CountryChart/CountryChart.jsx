import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

const CountryChart = ({ stats }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={[stats]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmed" fill="blue" />
        <Bar dataKey="deaths" fill="red" />
        <Bar dataKey="recovered" fill="green" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CountryChart;
