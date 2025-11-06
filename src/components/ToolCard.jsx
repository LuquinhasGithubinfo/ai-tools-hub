import React from 'react';
import placeholder from '../assets/placeholder.svg'; // Importa a imagem padrão

export default function ToolCard({ tool }) {
  return (
    <article className="bg-white rounded-xl shadow p-4 flex flex-col">
      <div className="flex items-center gap-4">
        <img
          src={tool.logo || placeholder} // Usa logo ou fallback
          alt={tool.name}
          className="w-12 h-12 rounded-md object-cover"
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
