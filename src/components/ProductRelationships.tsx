import React from 'react';

const relationships = [
  {
    product1: 'Coffee Beans',
    product2: 'Coffee Filters',
    effect: 'boost',
    correlation: 0.85,
    revenue: '+24%'
  },
  {
    product1: 'Black Tea',
    product2: 'Green Tea',
    effect: 'cannibalization',
    correlation: -0.62,
    revenue: '-15%'
  },
  {
    product1: 'Sugar',
    product2: 'Artificial Sweetener',
    effect: 'cannibalization',
    correlation: -0.78,
    revenue: '-28%'
  },
  {
    product1: 'Coffee Beans',
    product2: 'Milk',
    effect: 'boost',
    correlation: 0.72,
    revenue: '+18%'
  }
];

export default function ProductRelationships() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-6">Product Relationships</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Pair
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Effect Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Correlation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue Impact
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {relationships.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.product1}</div>
                  <div className="text-sm text-gray-500">{item.product2}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.effect === 'boost' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.effect.charAt(0).toUpperCase() + item.effect.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {item.correlation > 0 ? '+' : ''}{(item.correlation * 100).toFixed(0)}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${
                    item.revenue.startsWith('+') 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {item.revenue}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}