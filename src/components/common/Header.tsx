import React from 'react';
import { Sparkles, Film, Compass } from 'lucide-react';
import { ActiveTab } from '../../types';

interface HeaderProps {
  currentView: 'landing' | 'app';
  activeTab: ActiveTab;
  onNavigateView: (view: 'landing' | 'app') => void;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenCreateModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  activeTab,
  onNavigateView,
  onSelectTab,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#07080d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigateView('landing')}
          className="group text-left transition-opacity hover:opacity-90"
        >
          <span className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
            ANIMORA AI
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigateView('landing')}
            className={`transition-colors hover:text-white ${currentView === 'landing' ? 'text-white' : 'text-slate-400'}`}
          >
            Overview
          </button>
          <button
            onClick={() => {
              onNavigateView('app');
              onSelectTab('dashboard');
            }}
            className={`transition-colors hover:text-white ${currentView === 'app' && activeTab === 'dashboard' ? 'text-white' : 'text-slate-400'}`}
          >
            Studio
          </button>
          <button
            onClick={() => {
              onNavigateView('app');
              onSelectTab('characters');
            }}
            className={`transition-colors hover:text-white ${currentView === 'app' && activeTab === 'characters' ? 'text-white' : 'text-slate-400'}`}
          >
            Characters
          </button>
          <button
            onClick={() => {
              onNavigateView('app');
              onSelectTab('scenes');
            }}
            className={`transition-colors hover:text-white ${currentView === 'app' && activeTab === 'scenes' ? 'text-white' : 'text-slate-400'}`}
          >
            Scenes
          </button>
          <button
            onClick={() => {
              onNavigateView('app');
              onSelectTab('voices');
            }}
            className={`transition-colors hover:text-white ${currentView === 'app' && activeTab === 'voices' ? 'text-white' : 'text-slate-400'}`}
          >
            Dubbing
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {currentView === 'landing' ? (
            <>
              <button
                onClick={() => {
                  onNavigateView('app');
                  onSelectTab('dashboard');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Compass className="h-3.5 w-3.5" />
                <span>Explore Studio</span>
              </button>
              <button
                onClick={() => {
                  onNavigateView('app');
                  onSelectTab('new_movie');
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all hover:from-indigo-400 hover:to-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] active:scale-95"
              >
                <Sparkles className="h-3.5 w-3.5 text-indigo-200" />
                <span>Create Your Movie</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onNavigateView('landing')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>Landing Page</span>
              </button>
              <button
                onClick={() => onSelectTab('new_movie')}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                <Film className="h-3.5 w-3.5" />
                <span>New Movie</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
