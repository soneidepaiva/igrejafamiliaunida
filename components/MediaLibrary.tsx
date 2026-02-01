
import React, { useState } from 'react';

interface MediaLibraryProps {
  isAdmin: boolean;
}

const MediaLibrary: React.FC<MediaLibraryProps> = ({ isAdmin }) => {
  const [activeTab, setActiveTab] = useState<'VIDEO' | 'AUDIO' | 'IMAGE' | 'PDF'>('VIDEO');

  const tabs = [
    { type: 'VIDEO', icon: 'fa-play', label: 'Vídeos' },
    { type: 'AUDIO', icon: 'fa-volume-high', label: 'Áudios' },
    { type: 'IMAGE', icon: 'fa-image', label: 'Fotos' },
    { type: 'PDF', icon: 'fa-book', label: 'Livros/PDF' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Biblioteca de Mídia</h1>
        {isAdmin && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <i className="fa-solid fa-plus"></i>
            Adicionar Mídia
          </button>
        )}
      </div>

      <div className="flex bg-white border rounded-xl p-1 shadow-sm overflow-x-auto no-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab.type}
            onClick={() => setActiveTab(tab.type as any)}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === tab.type ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <i className={`fa-solid ${tab.icon}`}></i>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-xl border shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="aspect-video bg-slate-100 relative">
              <img 
                src={`https://picsum.photos/seed/${activeTab}${i}/400/225`} 
                className="w-full h-full object-cover" 
                alt="" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl">
                  <i className={`fa-solid ${activeTab === 'VIDEO' ? 'fa-play' : activeTab === 'AUDIO' ? 'fa-headphones' : 'fa-expand'}`}></i>
                </button>
              </div>
              {activeTab === 'VIDEO' && (
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">12:30</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-800 line-clamp-1">
                {activeTab === 'VIDEO' ? 'Culto de Domingo #24' : 
                 activeTab === 'AUDIO' ? 'Podcast: A Força da Fé' :
                 activeTab === 'IMAGE' ? 'Encontro de Famílias' : 'Livro: Oração Eficaz'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 uppercase font-semibold">Categoria Espiritual</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;
