import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold">AI</div>
          <div>
            <h1 className="text-xl font-semibold">AI Tools Hub</h1>
            <p className="text-xs text-gray-500">Find and compare the best AI tools</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a href="#" className="text-sm hover:underline">Home</a>
          <a href="#" className="text-sm hover:underline">Categories</a>
          <a href="#" className="text-sm hover:underline">Blog</a>
          <button className="ml-2 px-3 py-1 rounded-lg border border-gray-200 text-sm">Subscribe</button>
        </nav>
      </div>
    </header>
  )
}
