
import React from 'react';
import { PIX_DATA } from '../constants';

const Subscription: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
        <div className="bg-indigo-600 p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">Plano Mensal</h2>
          <div className="flex items-center justify-center gap-1">
            <span className="text-2xl font-light">R$</span>
            <span className="text-5xl font-bold">29,90</span>
            <span className="text-xl font-light">/mês</span>
          </div>
          <p className="mt-4 text-indigo-100 text-sm">Apoie o projeto Família Unida e tenha acesso ilimitado a todos os recursos premium.</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-check text-xs"></i>
              </div>
              <div>
                <p className="font-bold">Acesso ilimitado à Bíblia Offline</p>
                <p className="text-sm text-slate-500">Leia todos os 66 livros onde quer que esteja.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-check text-xs"></i>
              </div>
              <div>
                <p className="font-bold">Transmissões ao Vivo HD</p>
                <p className="text-sm text-slate-500">Realize lives para toda a comunidade sem limites.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fa-solid fa-check text-xs"></i>
              </div>
              <div>
                <p className="font-bold">Armazenamento em Nuvem</p>
                <p className="text-sm text-slate-500">Grave áudios e vídeos diretamente na sua biblioteca.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="text-center font-bold text-slate-400 uppercase tracking-widest text-xs mb-4">Pagamento via PIX</h3>
            
            <div className="bg-slate-50 rounded-xl p-6 border-2 border-dashed border-slate-200">
              <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 bg-white p-2 border rounded-xl shadow-inner flex items-center justify-center">
                   {/* Simulating QR Code with simple icon */}
                   <i className="fa-solid fa-qrcode text-8xl text-slate-300"></i>
                </div>
                
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white border rounded-lg">
                    <span className="text-xs font-bold text-slate-400 uppercase">Chave PIX (Celular)</span>
                    <span className="font-bold text-slate-800">{PIX_DATA.phone}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white border rounded-lg">
                    <span className="text-xs font-bold text-slate-400 uppercase">Titular</span>
                    <span className="font-bold text-slate-800 text-right text-xs md:text-sm">{PIX_DATA.holder}</span>
                  </div>
                </div>

                <button 
                  onClick={() => alert('Chave PIX copiada!')}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-copy"></i>
                  Copiar Chave PIX
                </button>
                <p className="text-[10px] text-center text-slate-400">Após o pagamento, envie o comprovante para o administrador para ativação imediata.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
