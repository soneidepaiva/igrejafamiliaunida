
import React from 'react';
import { AppView, User } from '../types';
import { LOGO_SVG } from '../constants';

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  user: User | null;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, user, onLogout }) => {
  const navItems = [
    { view: AppView.HOME, icon: 'fa-house', label: 'Início' },
    { view: AppView.BIBLE, icon: 'fa-book-bible', label: 'Bíblia' },
    { view: AppView.JOURNAL, icon: 'fa-pen-clip', label: 'Diário' },
    { view: AppView.MEDIA, icon: 'fa-photo-film', label: 'Mídia' },
    { view: AppView.LIVE, icon: 'fa-video', label: 'Ao Vivo' },
  ];

  const adminItems = [
    { view: AppView.ADMIN, icon: 'fa-user-gear', label: 'Gestão' },
    { view: AppView.SUBSCRIPTION, icon: 'fa-credit-card', label: 'Assinatura' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r h-screen sticky top-0">
        <div className="p-6 flex flex-col items-center">
          <div className="w-24 h-24 mb-4">
            {LOGO_SVG}
          </div>
          <h1 className="text-xl font-bold text-blue-900 text-center">Família Unida</h1>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">Menu</p>
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onViewChange(item.view)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                currentView === item.view ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-5`}></i>
              {item.label}
            </button>
          ))}

          {user?.role === 'ADMIN' && (
            <>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-6 mb-2 px-3">Administrador</p>
              {adminItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => onViewChange(item.view)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    currentView === item.view ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <i className={`fa-solid ${item.icon} w-5`}></i>
                  {item.label}
                </button>
              ))}
            </>
          )}
        </nav>

        <div className="p-4 border-t space-y-3">
          <button 
            onClick={() => onViewChange(AppView.PROFILE)}
            className="flex items-center gap-3 w-full p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <img src={user?.photo} className="w-8 h-8 rounded-full border" alt="Profile" />
            <div className="text-left overflow-hidden">
              <p className="text-sm font-semibold truncate">{user?.name}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email}</p>
            </div>
          </button>
          <button 
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-800"
          >
            <i className="fa-solid fa-download"></i>
            Baixar App
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center p-2 z-50 md:hidden">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={`flex flex-col items-center gap-1 p-2 transition-colors ${
              currentView === item.view ? 'text-blue-600' : 'text-slate-500'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-lg`}></i>
            <span className="text-[10px] uppercase font-bold">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
