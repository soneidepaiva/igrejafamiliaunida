
import React, { useState } from 'react';
import { CHRISTIAN_EMOJIS } from '../constants';

const Journal: React.FC = () => {
  const [entries, setEntries] = useState<any[]>([
    { id: '1', date: 'Hoje', text: 'Senhor, abençoe minha família hoje e nos dê sabedoria em nossas decisões. 🙏', type: 'TEXT' }
  ]);
  const [currentText, setCurrentText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleAddEntry = () => {
    if (!currentText.trim()) return;
    setEntries([{
      id: Date.now().toString(),
      date: 'Agora',
      text: currentText,
      type: 'TEXT'
    }, ...entries]);
    setCurrentText('');
  };

  const addEmoji = (emoji: string) => {
    setCurrentText(prev => prev + emoji);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-5rem)]">
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-t-2xl border-b border-blue-100">
        <h1 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
          <i className="fa-solid fa-dove text-blue-600"></i>
          Conversando com Deus Pai
        </h1>
        <p className="text-blue-700 text-sm opacity-80">Um lugar sagrado para suas orações e reflexões diárias.</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-white">
        {entries.map(entry => (
          <div key={entry.id} className="bg-slate-50 border rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{entry.date}</span>
              <i className="fa-solid fa-heart text-red-300 text-xs"></i>
            </div>
            <p className="text-slate-800 whitespace-pre-wrap">{entry.text}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-50 border-t rounded-b-2xl">
        <div className="flex flex-wrap gap-2 mb-3">
          {CHRISTIAN_EMOJIS.map(e => (
            <button 
              key={e} 
              onClick={() => addEmoji(e)}
              className="w-8 h-8 flex items-center justify-center bg-white border rounded shadow-sm hover:bg-blue-50 transition-colors"
            >
              {e}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button 
            onMouseDown={() => setIsRecording(true)}
            onMouseUp={() => setIsRecording(false)}
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all shadow-md ${
              isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            title="Segure para gravar áudio"
          >
            <i className={`fa-solid ${isRecording ? 'fa-circle' : 'fa-microphone'}`}></i>
          </button>
          
          <div className="flex-1 relative">
            <textarea
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              placeholder="Escreva sua oração ou pensamento..."
              className="w-full h-12 px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
            />
          </div>

          <button 
            onClick={handleAddEntry}
            className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-md transition-all"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journal;
