
import React, { useState, useEffect } from 'react';
import { AppView, User } from './types';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import BibleReader from './components/BibleReader';
import MediaLibrary from './components/MediaLibrary';
import Journal from './components/Journal';
import LiveRecording from './components/LiveRecording';
import AdminDashboard from './components/AdminDashboard';
import Subscription from './components/Subscription';
import Profile from './components/Profile';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Admin Família Unida',
    email: 'admin@familiaunida.com',
    photo: 'https://picsum.photos/seed/admin/200',
    role: 'ADMIN'
  });

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME: return <Home onNavigate={setCurrentView} />;
      case AppView.BIBLE: return <BibleReader />;
      case AppView.MEDIA: return <MediaLibrary isAdmin={user?.role === 'ADMIN'} />;
      case AppView.JOURNAL: return <Journal />;
      case AppView.LIVE: return <LiveRecording />;
      case AppView.ADMIN: return <AdminDashboard />;
      case AppView.SUBSCRIPTION: return <Subscription />;
      case AppView.PROFILE: return <Profile user={user} onUpdateUser={setUser} />;
      default: return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        user={user}
        onLogout={() => setUser(null)}
      />
      <main className="flex-1 overflow-y-auto pb-24 md:pb-0">
        <header className="bg-white border-b p-4 flex justify-between items-center sticky top-0 z-10 md:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">Família Unida</span>
          </div>
          {user && (
            <button 
              onClick={() => setCurrentView(AppView.PROFILE)}
              className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border"
            >
              <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
            </button>
          )}
        </header>
        <div className="container mx-auto p-4 md:p-8">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
