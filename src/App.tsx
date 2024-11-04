import React from 'react';
import { BarChart3, ShoppingBasket, TrendingUp, ArrowUpDown, Brain, Code, Rocket } from 'lucide-react';
import ProductPerformance from './components/ProductPerformance';
import PriceElasticity from './components/PriceElasticity';
import ProductRelationships from './components/ProductRelationships';
import Navbar from './components/Navbar';
import CandidatePresentation from './components/CandidatePresentation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <CandidatePresentation />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SkillCard
            icon={<Brain className="w-6 h-6 text-purple-600" />}
            title="Data Analysis"
            description="Expert in analyzing complex datasets and deriving actionable insights"
          />
          <SkillCard
            icon={<Code className="w-6 h-6 text-blue-600" />}
            title="Full Stack Development"
            description="Proficient in modern web technologies and data visualization"
          />
          <SkillCard
            icon={<Rocket className="w-6 h-6 text-green-600" />}
            title="Business Intelligence"
            description="Experienced in transforming data into business strategies"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
            title="Total Sales"
            value="$124,592"
            change="+12.5%"
          />
          <MetricCard
            icon={<ShoppingBasket className="w-6 h-6 text-green-600" />}
            title="Basket Size"
            value="4.2 items"
            change="+3.8%"
          />
          <MetricCard
            icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
            title="Conversion Rate"
            value="23.5%"
            change="+5.2%"
          />
          <MetricCard
            icon={<ArrowUpDown className="w-6 h-6 text-orange-600" />}
            title="Price Elasticity"
            value="-1.35"
            change="Elastic"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ProductPerformance />
          <PriceElasticity />
        </div>

        <ProductRelationships />
      </main>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

function MetricCard({ icon, title, value, change }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <span className="text-sm font-medium text-green-600">{change}</span>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-transform hover:scale-105">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;