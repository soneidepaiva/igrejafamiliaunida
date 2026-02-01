
import React, { useState } from 'react';
import { BIBLE_BOOKS } from '../constants';

const BibleReader: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState(BIBLE_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [testamentFilter, setTestamentFilter] = useState<'ALL' | 'OLD' | 'NEW'>('ALL');

  const filteredBooks = BIBLE_BOOKS.filter(b => 
    testamentFilter === 'ALL' || b.testament === testamentFilter
  );

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-5rem)]">
      <div className="flex flex-col md:flex-row gap-4 mb-6 sticky top-0 bg-slate-50 py-2 z-10">
        <div className="flex-1 flex gap-2">
          <select 
            className="flex-1 p-2 bg-white border rounded-lg font-bold shadow-sm"
            value={selectedBook.name}
            onChange={(e) => {
              const book = BIBLE_BOOKS.find(b => b.name === e.target.value);
              if (book) {
                setSelectedBook(book);
                setSelectedChapter(1);
              }
            }}
          >
            {filteredBooks.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
          </select>
          <select 
            className="w-24 p-2 bg-white border rounded-lg font-bold shadow-sm text-center"
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(Number(e.target.value))}
          >
            {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(c => (
              <option key={c} value={c}>Cap. {c}</option>
            ))}
          </select>
        </div>
        
        <div className="flex bg-white border rounded-lg p-1 shadow-sm">
          {(['ALL', 'OLD', 'NEW'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTestamentFilter(t)}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                testamentFilter === t ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t === 'ALL' ? 'TUDO' : t === 'OLD' ? 'V.T' : 'N.T'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border p-6 overflow-y-auto">
        <h2 className="text-2xl font-serif font-bold text-center mb-8 border-b pb-4">
          {selectedBook.name} {selectedChapter}
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto leading-relaxed text-slate-800 font-serif text-lg">
          {/* Simulated content based on chapter number */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
            <p key={v} className="relative pl-6">
              <span className="absolute left-0 top-0 text-blue-500 text-xs font-bold">{v}</span>
              Esta é uma simulação da leitura offline da Bíblia Sagrada para o capítulo {selectedChapter} de {selectedBook.name}. 
              No app completo, todos os versículos estão embutidos para acesso sem internet.
            </p>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-slate-500 font-medium">
        <button 
          disabled={selectedChapter === 1}
          onClick={() => setSelectedChapter(prev => prev - 1)}
          className="flex items-center gap-1 hover:text-blue-600 disabled:opacity-30"
        >
          <i className="fa-solid fa-chevron-left"></i> Anterior
        </button>
        <span className="bg-slate-200 px-3 py-1 rounded-full text-slate-700">Acesso Offline Ativo</span>
        <button 
          disabled={selectedChapter === selectedBook.chapters}
          onClick={() => setSelectedChapter(prev => prev + 1)}
          className="flex items-center gap-1 hover:text-blue-600 disabled:opacity-30"
        >
          Próximo <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BibleReader;
