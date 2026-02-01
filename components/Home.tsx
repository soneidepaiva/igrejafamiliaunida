
import React, { useState, useEffect } from 'react';
import { getDailyDevotional, getReadingPlan } from '../geminiService';
import { AppView } from '../types';

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [devotional, setDevotional] = useState<string>('Carregando palavra do dia...');
  const [plan, setPlan] = useState<string>('Carregando plano de leitura...');

  useEffect(() => {
    const fetchData = async () => {
      const dev = await getDailyDevotional();
      setDevotional(dev || '');
      const pl = await getReadingPlan();
      setPlan(pl || '');
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-10 text-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Bem-vindo à Família Unida</h1>
        <p className="text-blue-100 max-w-2xl text-lg">"Mas eu e a minha casa serviremos ao Senhor." (Josué 24:15)</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-sun text-xl"></i>
            </div>
            <h2 className="text-xl font-bold">Devocional Diário</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-wrap">
            {devotional}
          </div>
          <button 
            onClick={() => onNavigate(AppView.JOURNAL)}
            className="mt-6 w-full py-3 bg-blue-50 text-blue-700 font-semibold rounded-xl hover:bg-blue-100 transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-pen"></i>
            Escrever no Diário
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-list-check text-xl"></i>
              </div>
              <h2 className="text-xl font-bold">Plano de Leitura</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-wrap italic">
              {plan}
            </div>
            <button 
              onClick={() => onNavigate(AppView.BIBLE)}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Abrir Bíblia agora →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <i className="fa-solid fa-microphone text-blue-600"></i>
              Áudios Recentes
            </h2>
            <div className="space-y-3">
              {[1, 2].map(i => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 group cursor-pointer hover:border-blue-200">
                  <button className="w-10 h-10 bg-white shadow-sm border rounded-full flex items-center justify-center text-blue-600">
                    <i className="fa-solid fa-play"></i>
                  </button>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Oração da Manhã #0{i}</p>
                    <p className="text-xs text-slate-500">03:45 • Hoje</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
