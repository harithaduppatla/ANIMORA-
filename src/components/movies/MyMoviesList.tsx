import React, { useState } from 'react';
import { 
  Film, 
  Sparkles, 
  Play, 
  Clock, 
  Users, 
  Clapperboard, 
  Languages, 
  Search,
  Filter
} from 'lucide-react';
import { MovieProject, ActiveTab } from '../../types';

interface MyMoviesListProps {
  movies: MovieProject[];
  onSelectMovie: (movie: MovieProject) => void;
  onOpenCreate: () => void;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const MyMoviesList: React.FC<MyMoviesListProps> = ({
  movies,
  onSelectMovie,
  onOpenCreate,
  onNavigateTab
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filtered = movies.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || m.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            FILM REPERTOIRE · THEATRICAL ARCHIVE
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            My Anime Movie Projects
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Access your full slate of active productions, analyzed manuscripts, and mastered cuts.
          </p>
        </div>

        <button
          onClick={onOpenCreate}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all"
        >
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span>Create New Movie</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movie title, synopsis..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-white/10 bg-slate-900/60 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Functional segmented status filter (interactive button group) */}
        <div className="flex items-center gap-1 p-1 bg-slate-900/60 border border-white/10 rounded-xl w-full sm:w-auto">
          {['all', 'production', 'story_analyzed'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                filterStatus === st 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {st === 'all' ? 'All Projects' : st === 'production' ? 'In Production' : 'Analyzed'}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onSelectMovie(movie)}
            className="rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-white/20 transition-all p-5 flex flex-col justify-between space-y-4 group cursor-pointer"
          >
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                <img
                  src={movie.coverImage}
                  alt={movie.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-xs text-white font-mono">
                    <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                      {movie.estimatedDuration}
                    </span>
                    <span className="text-emerald-400 font-bold tabular-nums">
                      {movie.progress}% Done
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-amber-400 mb-1">{movie.tagline}</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{movie.title}</h3>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {movie.synopsis}
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span>{movie.charactersCount} Characters</span>
                <span className="text-slate-600">·</span>
                <span>{movie.scenesCount} Scenes</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectMovie(movie);
                  onNavigateTab('scenes');
                }}
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Inspect Shots →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
