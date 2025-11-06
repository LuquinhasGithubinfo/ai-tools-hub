import React, { useState, useEffect } from 'react';

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' });

  useEffect(() => {
    // Carrega feedbacks salvos no localStorage
    const saved = JSON.parse(localStorage.getItem('site_feedbacks') || '[]');
    setFeedbacks(saved);
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.comment) return;
    const updated = [...feedbacks, form];
    setFeedbacks(updated);
    localStorage.setItem('site_feedbacks', JSON.stringify(updated));
    setForm({ name: '', rating: 5, comment: '' });
  };

  return (
    <section className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Deixe sua opinião sobre o site
      </h2>

      {/* Formulário */}
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        />
        <textarea
          placeholder="O que você acha do site? Sugestões?"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        />
        <select
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
          className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        >
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} estrelas</option>)}
        </select>
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-500"
        >
          Enviar opinião
        </button>
      </div>

      {/* Feedbacks enviados */}
      <div className="mt-4">
        {feedbacks.length > 0 ? (
          feedbacks.map((f, idx) => (
            <div key={idx} className="mb-2 p-2 border rounded bg-white dark:bg-gray-800">
              <div className="flex justify-between">
                <span className="font-medium">{f.name}</span>
                <span className="text-yellow-400">{'★'.repeat(f.rating)}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{f.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Ainda não há opiniões.</p>
        )}
      </div>
    </section>
  );
}
