import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { LandingPage } from './components/landing/LandingPage';
import { Sidebar } from './components/dashboard/Sidebar';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { CreateMovieWorkflow } from './components/creation/CreateMovieWorkflow';
import { CharacterStudio } from './components/characters/CharacterStudio';
import { SceneStudio } from './components/scenes/SceneStudio';
import { VoiceDubbingStudio } from './components/voices/VoiceDubbingStudio';
import { MovieMemoryStudio } from './components/memory/MovieMemoryStudio';
import { MyMoviesList } from './components/movies/MyMoviesList';
import { SettingsView } from './components/settings/SettingsView';

import { 
  MovieProject, 
  CharacterProfile, 
  Scene, 
  ActiveTab 
} from './types';
import { 
  INITIAL_MOVIES, 
  INITIAL_CHARACTERS, 
  INITIAL_SCENES,
  PRODUCTION_SHOT_IMAGE
} from './data/mockData';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'app'>('landing');
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // App data state
  const [movies, setMovies] = useState<MovieProject[]>(INITIAL_MOVIES);
  const [characters, setCharacters] = useState<CharacterProfile[]>(INITIAL_CHARACTERS);
  const [scenes, setScenes] = useState<Scene[]>(INITIAL_SCENES);
  const [selectedMovie, setSelectedMovie] = useState<MovieProject>(INITIAL_MOVIES[0]);

  // Handle movie creation
  const handleMovieCreated = (newMoviePayload: any) => {
    const createdMovie: MovieProject = {
      id: `mov_${Date.now()}`,
      title: newMoviePayload.title || 'Untitled Anime Movie',
      tagline: 'A story of destiny and courage.',
      synopsis: newMoviePayload.storyText.slice(0, 160) + '...',
      coverImage: PRODUCTION_SHOT_IMAGE,
      animeStyle: newMoviePayload.animeStyle || 'makoto_shinkai',
      visualFormat: newMoviePayload.visualFormat || 'feature_film',
      originalLanguage: newMoviePayload.originalLanguage || 'Japanese (日本語)',
      targetLanguages: newMoviePayload.targetLanguages || ['English', 'Japanese'],
      status: 'story_analyzed',
      progress: 30,
      activeStage: 'Character Model Sheet Lock',
      charactersCount: newMoviePayload.analysis?.characterRoster?.length || 3,
      scenesCount: newMoviePayload.analysis?.sceneDrafts?.length || 2,
      shotsCount: 14,
      estimatedDuration: newMoviePayload.visualFormat === 'feature_film' ? '88 min' : '24 min',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };

    setMovies([createdMovie, ...movies]);
    setSelectedMovie(createdMovie);
    setActiveTab('characters');
  };

  const handleUpdateCharacter = (updated: CharacterProfile) => {
    setCharacters(characters.map(c => c.id === updated.id ? updated : c));
  };

  const handleAddCharacter = (newChar: CharacterProfile) => {
    setCharacters([...characters, newChar]);
  };

  const navigateTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navigation Bar */}
      <Header
        currentView={currentView}
        activeTab={activeTab}
        onNavigateView={(view) => {
          setCurrentView(view);
          if (view === 'app' && activeTab === 'new_movie') {
            setActiveTab('dashboard');
          }
        }}
        onSelectTab={navigateTab}
      />

      {/* Main View Area */}
      {currentView === 'landing' ? (
        <main className="flex-1">
          <LandingPage
            onStartCreating={() => {
              setCurrentView('app');
              setActiveTab('new_movie');
            }}
            onExploreStudio={(tab) => {
              setCurrentView('app');
              setActiveTab(tab || 'dashboard');
            }}
          />
        </main>
      ) : (
        /* Film Studio Workspace Layout */
        <div className="flex-1 flex flex-col md:flex-row relative">
          {/* Mobile Tab Bar Toggle */}
          <div className="md:hidden flex items-center justify-between p-3 border-b border-white/[0.08] bg-[#07080d]">
            <div className="text-xs font-mono text-indigo-400 capitalize">
              Module: {activeTab.replace('_', ' ')}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-white/10 text-slate-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop & Mobile Drawer Sidebar */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block z-40`}>
            <Sidebar
              activeTab={activeTab}
              onSelectTab={navigateTab}
              onBackToLanding={() => setCurrentView('landing')}
            />
          </div>

          {/* Studio Workspace Content Area */}
          <main className="flex-1 overflow-y-auto pb-16">
            {activeTab === 'dashboard' && (
              <DashboardOverview
                movies={movies}
                characters={characters}
                scenes={scenes}
                onNavigateTab={navigateTab}
                onSelectMovie={(movie) => {
                  setSelectedMovie(movie);
                  navigateTab('scenes');
                }}
                onOpenCreate={() => navigateTab('new_movie')}
              />
            )}

            {activeTab === 'new_movie' && (
              <CreateMovieWorkflow
                onMovieCreated={handleMovieCreated}
                onCancel={() => navigateTab('dashboard')}
              />
            )}

            {activeTab === 'my_movies' && (
              <MyMoviesList
                movies={movies}
                onSelectMovie={(movie) => {
                  setSelectedMovie(movie);
                  navigateTab('scenes');
                }}
                onOpenCreate={() => navigateTab('new_movie')}
                onNavigateTab={navigateTab}
              />
            )}

            {activeTab === 'characters' && (
              <CharacterStudio
                characters={characters}
                onUpdateCharacter={handleUpdateCharacter}
                onAddCharacter={handleAddCharacter}
              />
            )}

            {activeTab === 'scenes' && (
              <SceneStudio
                scenes={scenes}
              />
            )}

            {(activeTab === 'voices' || activeTab === 'dubbing') && (
              <VoiceDubbingStudio
                characters={characters}
              />
            )}

            {(activeTab === 'movie_memory' || activeTab === 'consistency') && (
              <MovieMemoryStudio />
            )}

            {activeTab === 'settings' && (
              <SettingsView />
            )}
          </main>
        </div>
      )}
    </div>
  );
}
