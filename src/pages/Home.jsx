import React, { useState, useEffect } from 'react';

function ToolCard({ tool }) {
  return (
    <article className="bg-white rounded-xl shadow p-4 flex flex-col">
      <div className="flex items-center gap-4">
        <img
          src={tool.logo || '/src/assets/placeholder.svg'}
          alt=""
          className="w-12 h-12 rounded-md object-cover"
        />
        <div>
          <h3 className="font-semibold">{tool.name}</h3>
          <p className="text-xs text-gray-500">
            {tool.category} • {tool.price}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700 flex-1">{tool.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <a
          className="text-sm font-medium text-indigo-600 hover:underline"
          href={tool.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit site
        </a>
        <div className="text-xs text-gray-500">
          Rating: {tool.rating} / 5
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/tools.json')
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch((err) => console.error('Erro ao carregar tools.json:', err));
  }, []);

  const filtered = tools.filter((t) =>
    (t.name + ' ' + t.description + ' ' + t.category)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">Discover top AI tools</h2>
          <p className="text-gray-600 mt-1">
            Compare, read short reviews and follow links
          </p>
        </div>
        <div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools..."
            className="border rounded-lg px-3 py-2 w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </section>
  );
}
