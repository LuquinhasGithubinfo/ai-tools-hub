import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <Home />
      </main>
      <footer className="text-center p-6 text-sm text-gray-500">
        © {new Date().getFullYear()} AI Tools Hub — Built with ❤️
      </footer>
    </div>
  )
}
