
import React, { useState } from 'react';
import { User } from '../types';

interface ProfileProps {
  user: User | null;
  onUpdateUser: (user: User) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onUpdateUser }) => {
  const [name, setName] = useState(user?.name || '');
  const [photo, setPhoto] = useState(user?.photo || '');

  const handleSave = () => {
    if (user) {
      onUpdateUser({ ...user, name, photo });
      alert('Perfil atualizado com sucesso!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <h1 className="text-2xl font-bold mb-8">Meu Perfil</h1>
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 relative group">
            <img src={photo} alt="Profile" className="w-full h-full object-cover" />
            <button 
              onClick={() => setPhoto(`https://picsum.photos/seed/${Math.random()}/200`)}
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
            >
              <i className="fa-solid fa-camera text-2xl"></i>
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-500">Clique para trocar a foto</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-xl bg-slate-50 text-slate-500 cursor-not-allowed"
              value={user?.email}
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Data de Nascimento</label>
            <input 
              type="date" 
              className="w-full p-3 border rounded-xl"
              defaultValue="1980-01-01"
            />
          </div>
          
          <div className="pt-6 border-t flex gap-4">
            <button 
              onClick={handleSave}
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md"
            >
              Salvar Alterações
            </button>
            <button className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Alterar Senha
            </button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-red-50 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-red-800 font-bold text-sm">Sair da Conta</p>
            <p className="text-red-600 text-xs">Desconecte-se com segurança</p>
          </div>
          <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
