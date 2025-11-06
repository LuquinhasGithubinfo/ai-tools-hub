import React from 'react';

export default function ToolCard({ tool }) {
  // Extrai o domínio do URL da ferramenta
  const domain = new URL(tool.url).hostname;

  // Link do logo via Clearbit + fallback
  const logoUrl = `https://logo.clearbit.com/${domain}?size=80`;

  return (
    <article className="bg-white rounded-xl shadow p-4 flex flex-col">
      <div className="flex items-center gap-4">
        <img
          src={logoUrl}
          alt={tool.name}
          className="w-12 h-12 rounded-md object-cover"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/80'; }}
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">{tool.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{tool.description}</p>
        </div>
      </div>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm text-blue-600 hover:underline"
      >
        Visitar
      </a>
    </article>
  );
}
