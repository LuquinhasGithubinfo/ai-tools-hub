import React from 'react';
import ToolCard from './ToolCard';
import tools from '../data/tools.json';

export default function ToolsList() {
  return (
    <section className="max-w-6xl mx-auto p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tools.map((tool, index) => (
        <ToolCard key={index} tool={tool} />
      ))}
    </section>
  );
}
