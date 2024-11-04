import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function CandidatePresentation() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg mb-8 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Interactive Dashboard Demo
        </h1>
        <p className="text-lg mb-6 text-blue-100">
          Oussama Zribi, As a candidate for the Data Analyst position at ViseVision Technologies, I've created this interactive dashboard to demonstrate my capabilities in data visualization, analysis, and full-stack development.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Tailwind CSS</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Recharts</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Data Analysis</span>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </button>
          <button className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </button>
          <button className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
}
