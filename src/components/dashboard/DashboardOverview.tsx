import React from 'react';
import { 
  Sparkles, 
  Film, 
  Users, 
  Clapperboard, 
  Mic2, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Play, 
  Layers,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { MovieProject, CharacterProfile, Scene, ActiveTab } from '../../types';

interface DashboardOverviewProps {
  movies: MovieProject[];
  characters: CharacterProfile[];
  scenes: Scene[];
  onNavigateTab: (tab: ActiveTab) => void;
  onSelectMovie: (movie: MovieProject) => void;
  onOpenCreate: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  movies,
  characters,
  scenes,
  onNavigateTab,
  onSelectMovie,
  onOpenCreate,
}) => {
  const activeMovie = movies[0];

  return (
    <div className="space-y-8 p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Top Banner / Welcome & Primary Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            ANIMORA STUDIO WORKSPACE · AUTONOMOUS PRODUCTION
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Movie Production Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Orchestrating autonomous agents across story analysis, character consistency, scenes, and acoustic dubbing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCreate}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Create New Movie</span>
          </button>
        </div>
      </div>

      {/* Project Statistics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-white/[0.08] bg-slate-900/40">
          <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span>Total Projects</span>
            <Film className="h-4 w-4 text-slate-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-white tabular-nums">
            {movies.length} Films
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            <span>1 Production</span>
            <span className="mx-1.5">·</span>
            <span>1 Ready for Cut</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-white/[0.08] bg-slate-900/40">
          <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span>Character Silhouettes</span>
            <Users className="h-4 w-4 text-slate-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-white tabular-nums">
            {characters.length} Profiles
          </div>
          <div className="text-[11px] text-emerald-400 mt-1">
            <span>100% Seed Locked</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-white/[0.08] bg-slate-900/40">
          <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span>Story Scenes Planned</span>
            <Clapperboard className="h-4 w-4 text-slate-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-white tabular-nums">
            {scenes.length} Scenes
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            <span>{scenes.reduce((acc, s) => acc + s.shots.length, 0)} Total Shots</span>
            <span className="mx-1.5">·</span>
            <span>24mm & 50mm Prime</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-white/[0.08] bg-slate-900/40">
          <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
            <span>Acoustic Dub Tracks</span>
            <Mic2 className="h-4 w-4 text-slate-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-white tabular-nums">
            4 Languages
          </div>
          <div className="text-[11px] text-indigo-400 mt-1">
            <span>Phoneme Lip-Sync Active</span>
          </div>
        </div>
      </div>

      {/* Main Focus: Active Movie Project & Progress */}
      {activeMovie && (
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Visual Cover / Preview */}
            <div className="lg:w-2/5 relative rounded-xl overflow-hidden aspect-video border border-white/10 group">
              <img
                src={activeMovie.coverImage}
                alt={activeMovie.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono bg-indigo-600/80 backdrop-blur-md px-2.5 py-0.5 rounded text-white font-medium">
                    ACTIVE PRODUCTION
                  </span>
                  <span className="text-xs font-mono text-white/90">
                    {activeMovie.estimatedDuration}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-amber-300 font-mono mb-1">{activeMovie.tagline}</div>
                  <h3 className="font-display text-xl font-bold text-white">{activeMovie.title}</h3>
                </div>
              </div>
            </div>

            {/* Production Details & Generation Status */}
            <div className="lg:w-3/5 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-mono text-indigo-400">
                    PIPELINE STATUS · STAGE 07 OF 12
                  </div>
                  <div className="font-mono text-xs font-semibold text-emerald-400">
                    {activeMovie.progress}% ASSEMBLED
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mb-4">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-amber-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${activeMovie.progress}%` }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {activeMovie.synopsis}
                </p>

                {/* Metadata Line */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-2 border-t border-white/[0.06]">
                  <div>
                    <span className="text-slate-500">Style:</span> <span className="text-slate-200">Makoto Shinkai Pastoral</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div>
                    <span className="text-slate-500">Original Audio:</span> <span className="text-slate-200">{activeMovie.originalLanguage}</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div>
                    <span className="text-slate-500">Dubbing:</span> <span className="text-slate-200">{activeMovie.targetLanguages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                <button
                  onClick={() => onNavigateTab('scenes')}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                  <Clapperboard className="h-3.5 w-3.5" />
                  <span>Inspect Scenes & Shots</span>
                </button>

                <button
                  onClick={() => onNavigateTab('characters')}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 hover:bg-white/[0.08] transition-colors"
                >
                  <Users className="h-3.5 w-3.5" />
                  <span>Character Studio</span>
                </button>

                <button
                  onClick={() => onNavigateTab('voices')}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 hover:bg-white/[0.08] transition-colors"
                >
                  <Mic2 className="h-3.5 w-3.5" />
                  <span>Voice & Dubbing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid: Recent Projects & Characters Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recent Projects */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-white">Recent Movie Projects</h2>
            <button 
              onClick={() => onNavigateTab('my_movies')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => onSelectMovie(movie)}
                className="p-4 rounded-xl border border-white/[0.08] bg-slate-900/40 hover:bg-slate-900/80 hover:border-white/20 transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <img
                    src={movie.coverImage}
                    alt={movie.title}
                    referrerPolicy="no-referrer"
                    className="h-14 w-20 rounded-lg object-cover shrink-0 border border-white/10"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                      <span>{movie.estimatedDuration}</span>
                      <span className="text-slate-600">·</span>
                      <span>{movie.charactersCount} Characters</span>
                      <span className="text-slate-600">·</span>
                      <span>{movie.scenesCount} Scenes</span>
                    </div>
                    <div className="text-[11px] text-indigo-400 font-mono mt-0.5">
                      {movie.activeStage}
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-emerald-400 tabular-nums">
                    {movie.progress}%
                  </div>
                  <div className="text-[11px] text-slate-500 capitalize">
                    {movie.status.replace('_', ' ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Character Studio Quick Look */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-white">Character Model Sheets</h2>
            <button 
              onClick={() => onNavigateTab('characters')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
            >
              <span>Studio</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {characters.slice(0, 2).map((char) => (
              <div
                key={char.id}
                onClick={() => onNavigateTab('characters')}
                className="p-3.5 rounded-xl border border-white/[0.08] bg-slate-900/40 hover:bg-slate-900/80 transition-all cursor-pointer flex items-center gap-3.5"
              >
                <img
                  src={char.avatarUrl}
                  alt={char.name}
                  referrerPolicy="no-referrer"
                  className="h-12 w-12 rounded-lg object-cover shrink-0 border border-white/10"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white truncate">{char.name}</h4>
                    <span className="text-[11px] font-mono text-emerald-400">Lock Active</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">
                    {char.role} · Age {char.age}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5 font-mono">
                    Voice: {char.voiceActorArchetype.split('(')[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
