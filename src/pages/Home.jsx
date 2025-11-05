import React, { useState, useEffect } from 'react';

function ToolCard({ tool }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <img
          src={tool.logo || '/src/assets/placeholder.svg'}
          alt={tool.name}
          className="w-12 h-12 rounded-md object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">{tool.name}</h3>
          <p className="text-xs text-gray-500">{tool.category} • {tool.price}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 flex-1">{tool.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <a
          className="text-sm font-medium text-indigo-600 hover:underline"
          href={tool.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit site
        </a>
        <div className="text-xs text-gray-500">Rating: {tool.rating} / 5</div>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [tools, setTools] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch('/tools.json')
      .then(res => res.json())
      .then(data => setTools(data))
      .catch(err => console.error('Erro ao carregar tools.json:', err));
  }, []);

  const categories = ['All', ...new Set(tools.map(t => t.category))];

  const filtered = tools.filter(t => {
    const matchesQuery = (t.name + ' ' + t.description + ' ' + t.category)
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory = category === 'All' || t.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Discover top AI tools</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Compare, read short reviews and follow links</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools..."
            className="border rounded-lg px-3 py-2 w-64 dark:bg-gray-700 dark:text-gray-100"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 mt-4">No tools found 😕</p>
      )}
    </section>
  );
}
