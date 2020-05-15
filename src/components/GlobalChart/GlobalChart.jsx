import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts';

const GlobalChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDailyData().then(res =>
        res.map(item => ({
          confirmed: item.confirmed.total,
          deaths: item.deaths.total,
          reportDate: item.reportDate
        }))
      );
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="reportDate" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="confirmed" stroke="blue" />
        <Line type="monotone" dataKey="deaths" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GlobalChart;
