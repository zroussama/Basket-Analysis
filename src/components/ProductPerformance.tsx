import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Coffee Beans', sales: 4000, profit: 2400 },
  { name: 'Tea Bags', sales: 3000, profit: 1398 },
  { name: 'Milk', sales: 2000, profit: 9800 },
  { name: 'Sugar', sales: 2780, profit: 3908 },
  { name: 'Cookies', sales: 1890, profit: 4800 },
];

export default function ProductPerformance() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-6">Product Performance</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" />
            <Bar dataKey="profit" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}