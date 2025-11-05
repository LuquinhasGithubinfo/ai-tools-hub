import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Detecta preferência do usuário no navegador
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <div className="max-w-6xl mx-auto p-6 flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <main className="max-w-6xl mx-auto p-6">
          <Home />
        </main>
        <footer className="text-center p-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          © {new Date().getFullYear()} AI Tools Hub — Built with ❤️
        </footer>
      </div>
    </div>
  );
}
