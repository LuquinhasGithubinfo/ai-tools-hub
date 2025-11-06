import React from 'react';

export default function ToolCard({ tool }) {
  const domain = new URL(tool.url).hostname;
  const logoUrl = `https://logo.clearbit.com/${domain}?size=80`;

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <img
          src={logoUrl}
          alt={tool.name}
          className="w-12 h-12 rounded-md object-cover"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/80'; }}
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
