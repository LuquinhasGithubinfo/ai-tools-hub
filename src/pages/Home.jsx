import React, { useState, useEffect } from 'react';
import ToolCard from '../components/ToolCard';
import toolsData from '../data/tools.json';

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (name) => {
    let updated;
    if (favorites.includes(name)) {
      updated = favorites.filter(f => f !== name);
    } else {
      updated = [...favorites, name];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const toggleCompare = (tool) => {
    let updated;
    if (compareList.some(t => t.name === tool.name)) {
      updated = compareList.filter(t => t.name !== tool.name);
    } else if (compareList.length < 3) {
      updated = [...compareList, tool];
    } else {
      return; // máximo 3 para comparar
    }
    setCompareList(updated);
  };

  const categories = ['All', ...new Set(toolsData.map(t => t.category))];

  const filtered = toolsData.filter(t => {
    const matchesQuery = (t.name + ' ' + t.description + ' ' + t.category)
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory = category === 'All' || t.category === category;
    return matchesQuery && matchesCategory;
  });

  const similarTools = (tool) =>
    toolsData.filter(t => t.category === tool.category && t.name !== tool.name).slice(0, 3);

  const topRated = [...toolsData].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Discover top AI tools</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Compare, read short reviews and follow links</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 flex-wrap">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools..."
            className="border rounded-lg px-3 py-2 w-64 dark:bg-gray-700 dark:text-gray-100"
          />
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1 rounded-lg border text-sm font-medium transition ${
                  category === c
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Top Tools This Month</h3>
        <div className="flex gap-4 mt-2">
          {topRated.map((tool, idx) => (
            <div key={tool.name} className="flex-1">
              <ToolCard
                tool={tool}
                onFavorite={toggleFavorite}
                isFavorite={favorites.includes(tool.name)}
                similarTools={similarTools(tool)}
                rank={idx + 1}
              />
            </div>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, index) => (
            <ToolCard
              key={index}
              tool={tool}
              onFavorite={toggleFavorite}
              isFavorite={favorites.includes(tool.name)}
              similarTools={similarTools(tool)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 mt-4">No tools found 😕</p>
      )}

      {compareList.length > 1 && (
        <div className="mt-6 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Compare Tools</h4>
          <div className="grid grid-cols-compare gap-4">
            {compareList.map(tool => (
              <div key={tool.name} className="p-2 bg-white dark:bg-gray-800 rounded shadow">
                <h5 className="font-semibold">{tool.name}</h5>
                <p className="text-xs">{tool.category} • {tool.price}</p>
                <p className="text-xs">Rating: {tool.rating}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
