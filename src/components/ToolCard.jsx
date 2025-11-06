import React, { useState } from 'react';

export default function ToolCard({ tool, onFavorite, isFavorite, similarTools, rank }) {
  const [showDetails, setShowDetails] = useState(false);
  const domain = new URL(tool.url).hostname;
  const logoUrl = `https://logo.clearbit.com/${domain}?size=80`;

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col transition-transform hover:scale-105 hover:shadow-xl relative">
      {rank && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs rounded font-bold">
          #{rank}
        </div>
      )}
      <div className="flex items-center gap-4">
        <img
          src={logoUrl}
          alt={tool.name}
          className="w-12 h-12 rounded-md object-cover"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/80'; }}
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">{tool.name}</h3>
          <p className="text-xs text-gray-500">{tool.category} • {tool.price}</p>
        </div>
        <button
          onClick={() => onFavorite(tool.name)}
          className={`ml-2 text-lg ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
        >
          ❤️
        </button>
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

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-2 text-xs text-gray-500 hover:underline"
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </button>

      {showDetails && similarTools && similarTools.length > 0 && (
        <div className="mt-2 text-xs text-gray-500">
          Similar tools: {similarTools.map(s => s.name).join(', ')}
        </div>
      )}
    </article>
  );
}
