import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Film, 
  Users, 
  Clapperboard, 
  Mic2, 
  Languages, 
  BrainCircuit, 
  ShieldCheck, 
  Settings,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { ActiveTab } from '../../types';

interface SidebarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onBackToLanding: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  onBackToLanding
}) => {
  const navItems = [
    { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'new_movie' as ActiveTab, label: 'New Movie', icon: PlusCircle, isHighlight: true },
    { id: 'my_movies' as ActiveTab, label: 'My Movies', icon: Film },
    { id: 'characters' as ActiveTab, label: 'Characters', icon: Users },
    { id: 'scenes' as ActiveTab, label: 'Scenes', icon: Clapperboard },
    { id: 'voices' as ActiveTab, label: 'Voices', icon: Mic2 },
    { id: 'dubbing' as ActiveTab, label: 'Dubbing', icon: Languages },
    { id: 'movie_memory' as ActiveTab, label: 'Movie Memory', icon: BrainCircuit },
    { id: 'consistency' as ActiveTab, label: 'Consistency', icon: ShieldCheck },
    { id: 'settings' as ActiveTab, label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-white/[0.08] bg-[#07080d]/95 flex flex-col justify-between h-[calc(100vh-4rem)] sticky top-16 select-none">
      <div className="p-4 space-y-5">
        {/* Prominent Create New Movie Action */}
        <button
          onClick={() => onSelectTab('new_movie')}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:from-indigo-400 hover:to-violet-500 transition-all active:scale-[0.98]"
        >
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span>Create New Movie</span>
        </button>

        {/* Studio Navigation Links */}
        <div className="space-y-1">
          <div className="px-3 pb-2 text-[11px] font-mono tracking-wider text-slate-500 uppercase">
            Film Studio Modules
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive 
                      ? 'bg-indigo-600/20 text-white border border-indigo-500/30' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Sidebar Footer info */}
      <div className="p-4 border-t border-white/[0.08] space-y-3">
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>ACTIVE PROJECT</span>
            <span className="text-emerald-400">SYNCED</span>
          </div>
          <div className="text-xs font-bold text-white truncate">
            The Chrono-Archon’s Vow
          </div>
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-1">
            <span>Scene 2/24</span>
            <span>·</span>
            <span>68% Rendered</span>
          </div>
        </div>

        <button
          onClick={onBackToLanding}
          className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
        >
          <span>Return to Landing Page</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
};
