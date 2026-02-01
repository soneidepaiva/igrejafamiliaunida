
import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [members, setMembers] = useState([
    { id: '1', name: 'Maria Silva', email: 'maria@gmail.com', birthDate: '1990-05-15', photo: 'https://picsum.photos/seed/maria/100' },
    { id: '2', name: 'João Santos', email: 'joao@gmail.com', birthDate: '1985-11-22', photo: 'https://picsum.photos/seed/joao/100' },
  ]);

  const [newMember, setNewMember] = useState({ name: '', email: '', birthDate: '' });

  const addMember = () => {
    if (!newMember.name || !newMember.email) return;
    setMembers([...members, { ...newMember, id: Date.now().toString(), photo: 'https://picsum.photos/seed/new/100' }]);
    setNewMember({ name: '', email: '', birthDate: '' });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <i className="fa-solid fa-users text-blue-600"></i>
          Gestão de Membros
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-dashed">
          <input 
            type="text" 
            placeholder="Nome Completo" 
            className="p-2 border rounded-lg bg-white"
            value={newMember.name}
            onChange={e => setNewMember({...newMember, name: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="E-mail (Gmail)" 
            className="p-2 border rounded-lg bg-white"
            value={newMember.email}
            onChange={e => setNewMember({...newMember, email: e.target.value})}
          />
          <div className="flex gap-2">
            <input 
              type="date" 
              className="p-2 border rounded-lg bg-white flex-1"
              value={newMember.birthDate}
              onChange={e => setNewMember({...newMember, birthDate: e.target.value})}
            />
            <button 
              onClick={addMember}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold"
            >
              Adicionar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-sm border-b uppercase tracking-wider">
                <th className="pb-3 px-2 font-semibold">Perfil</th>
                <th className="pb-3 px-2 font-semibold">Nome</th>
                <th className="pb-3 px-2 font-semibold">E-mail</th>
                <th className="pb-3 px-2 font-semibold">Nascimento</th>
                <th className="pb-3 px-2 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {members.map(m => (
                <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-2">
                    <img src={m.photo} className="w-10 h-10 rounded-full border" alt="" />
                  </td>
                  <td className="py-3 px-2 font-medium">{m.name}</td>
                  <td className="py-3 px-2 text-slate-600">{m.email}</td>
                  <td className="py-3 px-2 text-slate-600 font-mono text-sm">{m.birthDate}</td>
                  <td className="py-3 px-2 text-right">
                    <button className="text-slate-400 hover:text-blue-600 mr-3"><i className="fa-solid fa-pen"></i></button>
                    <button className="text-slate-400 hover:text-red-600"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-file-pdf text-red-600"></i>
            Biblioteca & PDFs
          </h2>
          <div className="p-4 border border-dashed rounded-xl bg-slate-50 flex flex-col items-center justify-center gap-3">
            <i className="fa-solid fa-cloud-arrow-up text-3xl text-slate-300"></i>
            <p className="text-sm text-slate-500">Arraste PDFs ou clique para adicionar livros</p>
            <input type="file" className="hidden" id="pdf-upload" />
            <label htmlFor="pdf-upload" className="px-4 py-2 bg-slate-900 text-white rounded-lg cursor-pointer hover:bg-slate-800 text-sm font-bold">
              Selecionar Arquivos
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-image text-purple-600"></i>
            Galeria de Fotos
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group">
                <img src={`https://picsum.photos/seed/gallery${i}/200`} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="text-white"><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
            ))}
            <button className="aspect-square border border-dashed rounded-lg flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50">
              <i className="fa-solid fa-plus text-xl"></i>
              <span className="text-[10px] uppercase font-bold mt-1">Add Foto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
