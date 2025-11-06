import React from 'react';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold">AI</div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">AI Tools Hub</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Find and compare the best AI tools</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 items-center">
          {/* Link funcional */}
          <a href="/" className="text-sm hover:underline text-gray-700 dark:text-gray-300">Home</a>
        </nav>
      </div>
    </header>
  );
}
