import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { price: 2.99, demand: 1000 },
  { price: 3.49, demand: 850 },
  { price: 3.99, demand: 720 },
  { price: 4.49, demand: 600 },
  { price: 4.99, demand: 480 },
  { price: 5.49, demand: 380 },
];

export default function PriceElasticity() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-6">Price Elasticity</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="price" 
              label={{ value: 'Price ($)', position: 'bottom' }} 
            />
            <YAxis 
              label={{ value: 'Demand (units)', angle: -90, position: 'insideLeft' }} 
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="demand" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              dot={{ fill: '#8b5cf6' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}