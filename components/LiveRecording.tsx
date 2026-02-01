
import React, { useState, useRef, useEffect } from 'react';

const LiveRecording: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Erro ao acessar câmera:", err);
      }
    }
    setupCamera();
    
    return () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Câmera & Transmissão</h1>
        <div className="flex gap-2">
           <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${
             isLive ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-200 text-slate-500'
           }`}>
             <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-red-600' : 'bg-slate-400'}`}></div>
             {isLive ? 'AO VIVO' : 'OFFLINE'}
           </span>
        </div>
      </div>

      <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
        <video 
          ref={videoRef} 
          autoPlay 
          muted 
          playsInline 
          className="w-full h-full object-cover mirror"
        />
        
        {/* Overlays */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isRecording && (
            <div className="bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-2">
               REC <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            </div>
          )}
          <div className="bg-black/50 text-white px-3 py-1 rounded-lg text-xs font-bold">
            00:12:45
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6">
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-xl transition-all ${
              isRecording ? 'bg-white text-red-600' : 'bg-transparent text-white hover:bg-white/20'
            }`}
          >
            <i className={`fa-solid ${isRecording ? 'fa-stop' : 'fa-video'}`}></i>
          </button>
          
          <button 
            onClick={() => setIsLive(!isLive)}
            className={`px-8 py-3 rounded-full font-bold shadow-xl transition-all flex items-center gap-2 ${
              isLive ? 'bg-white text-blue-600 scale-110' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <i className="fa-solid fa-tower-broadcast"></i>
            {isLive ? 'Encerrar Live' : 'Iniciar Live'}
          </button>

          <button className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center border border-white/30 backdrop-blur-sm">
            <i className="fa-solid fa-camera-rotate"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-bold mb-2">Qualidade</h3>
          <p className="text-sm text-slate-500">Full HD 1080p</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-bold mb-2">Microfone</h3>
          <p className="text-sm text-slate-500">Padrão do Sistema</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-bold mb-2">Participantes</h3>
          <p className="text-sm text-slate-500">142 assistindo agora</p>
        </div>
      </div>
    </div>
  );
};

export default LiveRecording;
