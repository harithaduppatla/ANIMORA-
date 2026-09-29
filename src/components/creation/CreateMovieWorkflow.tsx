import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Upload, 
  FileText, 
  Check, 
  Film, 
  Languages, 
  Layers, 
  Play, 
  ArrowRight, 
  RefreshCw,
  Info,
  BookOpen,
  Sliders,
  Compass
} from 'lucide-react';
import { AnimeStyle, VisualFormat, StoryAnalysisData } from '../../types';
import { PRESET_STORIES, MOCK_ANALYSIS_RESULT } from '../../data/mockData';
import { StoryAnalysisInterface } from './StoryAnalysisInterface';

interface CreateMovieWorkflowProps {
  onMovieCreated: (newMovieData: any) => void;
  onCancel: () => void;
}

export const CreateMovieWorkflow: React.FC<CreateMovieWorkflowProps> = ({
  onMovieCreated,
  onCancel
}) => {
  const [step, setStep] = useState<'form' | 'analyzing' | 'results'>('form');

  // Form states
  const [title, setTitle] = useState<string>('The Chrono-Archon’s Vow');
  const [storyText, setStoryText] = useState<string>(PRESET_STORIES[0].text);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [animeStyle, setAnimeStyle] = useState<AnimeStyle>('makoto_shinkai');
  const [visualFormat, setVisualFormat] = useState<VisualFormat>('feature_film');
  const [artDirection, setArtDirection] = useState<string>('Cinematic 2.39:1 Anamorphic, rich twilight volumetric lighting, hand-painted digital backgrounds');
  const [originalLanguage, setOriginalLanguage] = useState<string>('Japanese (日本語)');
  const [targetLanguages, setTargetLanguages] = useState<string[]>(['English', 'Japanese', 'French', 'Spanish']);
  const [analysisResult, setAnalysisResult] = useState<StoryAnalysisData | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const animeStyles: Array<{ id: AnimeStyle; name: string; desc: string }> = [
    {
      id: 'makoto_shinkai',
      name: 'Atmospheric & Pastoral',
      desc: 'Makoto Shinkai aesthetic: hyper-detailed skies, god rays, rain reflections, deep emotional resonance.'
    },
    {
      id: 'cyberpunk_neo_tokyo',
      name: 'Cyberpunk Neo-Tokyo',
      desc: 'High-contrast neon reflections, rain-slicked asphalt, holographic lens flares, dark synth aesthetic.'
    },
    {
      id: 'dark_fantasy_mappa',
      name: 'Dark Fantasy & Grit',
      desc: 'Studio MAPPA aesthetic: intense kinetic line art, heavy shadow cross-hatching, high-stakes choreography.'
    },
    {
      id: 'shonen_epic',
      name: 'Shonen Epic Action',
      desc: 'Ufotable style dynamic particles, explosive color palettes, bold silhouettes, high octane climax pacing.'
    },
    {
      id: 'ghibli_whimsical',
      name: 'Whimsical Pastoral',
      desc: 'Studio Ghibli aesthetic: gentle watercolor textures, organic foliage, nostalgic warmth, lyrical pacing.'
    },
    {
      id: 'retro_90s_cel',
      name: '90s Retro Cel Animation',
      desc: 'Vintage hand-inked cels, film grain, analog color saturation, nostalgic classic sci-fi aura.'
    }
  ];

  const movieFormats: Array<{ id: VisualFormat; name: string; duration: string; desc: string }> = [
    { id: 'feature_film', name: 'Feature Film', duration: '~85-110 min', desc: 'Full 3-act narrative epic with complete character arcs and multiple orchestral set pieces.' },
    { id: 'pilot_episode', name: 'Pilot Episode', duration: '~24 min', desc: 'Serialized television standard with cold open, dual commercial act breaks, and cliffhanger.' },
    { id: 'short_film', name: 'Short Film', duration: '~15-20 min', desc: 'Focused poetic narrative concentrating on a singular philosophical crisis or romance.' },
    { id: 'cinematic_teaser', name: 'Cinematic Teaser', duration: '~3 min', desc: 'High-impact promotional trailer showcasing key world locations and character hooks.' }
  ];

  const availableLanguages = [
    'Japanese', 'English', 'French', 'Spanish', 'German', 'Korean', 'Mandarin', 'Italian'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      // Simulate file reading or load custom text
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text && text.trim().length > 0) {
          setStoryText(text);
        } else {
          // If binary file (pdf/docx simulated in browser), populate with rich manuscript representation
          setStoryText(`[Parsed Document: ${file.name}]\n\nPrologue: Whispers of the Star Engines\nAcross the forgotten rim of the galaxy, the celestial beacon began to pulse. The protagonist awakened to the sound of atmospheric thunder...`);
        }
      };
      if (file.type.includes('text') || file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else {
        // Mock parsed PDF/DOCX
        setStoryText(`[Extracted from: ${file.name}]\n\nAct I: The Shattered Citadel\nRain fell relentlessly over the stone parapets. Captain Kael watched the northern ridge where the imperial vanguard had massed...`);
      }
    }
  };

  const handleLoadPreset = (presetId: string) => {
    const preset = PRESET_STORIES.find(p => p.id === presetId);
    if (preset) {
      setTitle(preset.title);
      setStoryText(preset.text);
      setAnimeStyle(preset.animeStyle);
      setVisualFormat(preset.visualFormat);
      setOriginalLanguage(preset.originalLanguage);
      setTargetLanguages(preset.targetLanguages);
      setUploadedFileName(null);
    }
  };

  const handleStartAnalysis = () => {
    if (!storyText.trim()) return;
    setStep('analyzing');
  };

  const handleAnalysisComplete = (data: StoryAnalysisData) => {
    setAnalysisResult(data);
    setStep('results');
  };

  const handleLaunchProduction = () => {
    onMovieCreated({
      title,
      animeStyle,
      visualFormat,
      originalLanguage,
      targetLanguages,
      storyText,
      analysis: analysisResult || MOCK_ANALYSIS_RESULT
    });
  };

  const toggleLanguage = (lang: string) => {
    if (targetLanguages.includes(lang)) {
      if (targetLanguages.length > 1) {
        setTargetLanguages(targetLanguages.filter(l => l !== lang));
      }
    } else {
      setTargetLanguages([...targetLanguages, lang]);
    }
  };

  if (step === 'analyzing') {
    return (
      <StoryAnalysisInterface 
        storyTitle={title}
        storyText={storyText}
        onComplete={handleAnalysisComplete}
        onCancel={() => setStep('form')}
      />
    );
  }

  if (step === 'results' && analysisResult) {
    return (
      <div className="p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>STORY ANALYSIS COMPLETE · READY FOR PRODUCTION</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Structured Story Overview
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Hierarchical dramaturgical breakdown for <strong className="text-slate-200">{title}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setStep('form')}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              Adjust Inputs
            </button>
            <button
              onClick={handleLaunchProduction}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Launch Movie Production</span>
            </button>
          </div>
        </div>

        {/* Structured Story Overview Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Logline Box */}
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-2">
              <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                Extracted Logline
              </div>
              <p className="text-base font-medium text-slate-100 leading-relaxed italic">
                "{analysisResult.logline}"
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {analysisResult.themes.map((theme, i) => (
                  <span key={i} className="text-xs text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Hierarchical 3-Act Timeline */}
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-4">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Hierarchical 3-Act Narrative Arc
              </div>
              
              <div className="space-y-4">
                {analysisResult.hierarchicalTimeline.map((act, i) => (
                  <div key={i} className="p-4 rounded-lg bg-black/30 border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-300 font-mono">{act.act}</span>
                      <span className="text-slate-400">{act.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {act.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {act.chapters.map((ch, idx) => (
                        <span key={idx} className="text-[11px] text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded font-mono">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Detected Events */}
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-3">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Key Dramatic Milestones & Timecodes
              </div>
              <div className="space-y-2">
                {analysisResult.detectedEvents.map((evt, i) => (
                  <div key={i} className="flex items-start justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-amber-400 font-semibold shrink-0">{evt.timecode}</span>
                      <div>
                        <div className="text-white font-medium">{evt.event}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{evt.impact}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: World Lore & Continuity Anchors */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-3">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                World Building Architecture
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-slate-500 font-semibold mb-0.5">Setting & Scale</div>
                  <div className="text-slate-300">{analysisResult.worldBuilding.setting}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-semibold mb-0.5">Magic / Technology System</div>
                  <div className="text-slate-300">{analysisResult.worldBuilding.magicOrTechSystem}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-semibold mb-0.5">Faction Dynamics</div>
                  <div className="text-slate-300">{analysisResult.worldBuilding.factionDynamics}</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5 space-y-3">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Continuity Invariants
              </div>
              <div className="space-y-2 text-xs">
                {analysisResult.continuityAnchors.map((anchor, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-indigo-400 shrink-0 font-bold">•</span>
                    <span>{anchor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 text-xs space-y-2">
              <div className="font-semibold text-white">Hierarchical Storage Active</div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Characters and scenes have been partitioned into dedicated model sheet slots. You can modify character personalities or camera movements independently at any point.
              </p>
              <button
                onClick={handleLaunchProduction}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-500 transition-colors"
              >
                <span>Proceed to Studio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            STEP 1 · STORY INGESTION & FILM PARAMETERS
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Create New Anime Movie
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Provide your raw story or manuscript. Our agentic pipeline will analyze characters, plan shots, and direct your film.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleStartAnalysis}
            disabled={!storyText.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Analyze Story</span>
          </button>
        </div>
      </div>

      {/* Preset Story Quick-Load Bar */}
      <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
            <span>Quick-Load Story Presets:</span>
          </div>
          <span className="text-[11px] text-slate-500">Click to instantly populate screenplay manuscript</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {PRESET_STORIES.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handleLoadPreset(preset.id)}
              className="text-left p-3 rounded-lg border border-white/[0.08] bg-black/40 hover:bg-indigo-950/20 hover:border-indigo-500/40 transition-all text-xs"
            >
              <div className="font-semibold text-white truncate">{preset.title}</div>
              <div className="text-[11px] text-slate-400 truncate mt-0.5">{preset.synopsis}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Story Form */}
      <div className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
            Movie Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. The Chrono-Archon's Vow"
            className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Story Input Area with File Upload */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider">
              Story Manuscript / Screenplay (Text, TXT, PDF, DOCX)
            </label>
            <div className="text-xs font-mono text-slate-500">
              {storyText.split(/\s+/).filter(Boolean).length} words
            </div>
          </div>

          <div className="relative">
            <textarea
              rows={8}
              value={storyText}
              onChange={(e) => setStoryText(e.target.value)}
              placeholder="Paste your story here, chapter by chapter, or drop a document..."
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 p-4 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono leading-relaxed"
            />
          </div>

          {/* Upload Button or Drop Area */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt,.pdf,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors"
              >
                <Upload className="h-3.5 w-3.5 text-indigo-400" />
                <span>Upload TXT / PDF / DOCX</span>
              </button>
              {uploadedFileName && (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  <span>{uploadedFileName} loaded</span>
                </span>
              )}
            </div>

            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 text-slate-500" />
              <span>Hierarchical chunking handles manuscripts up to 150k words</span>
            </div>
          </div>
        </div>

        {/* Anime Style Selection */}
        <div className="space-y-3 pt-4 border-t border-white/[0.08]">
          <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider">
            Anime Visual Style & Aesthetic
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {animeStyles.map((style) => {
              const isSelected = animeStyle === style.id;
              return (
                <div
                  key={style.id}
                  onClick={() => setAnimeStyle(style.id)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-indigo-500/60 bg-indigo-950/20 ring-1 ring-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                      : 'border-white/[0.08] bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold text-white">{style.name}</h4>
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {style.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preferred Movie Format */}
        <div className="space-y-3 pt-4 border-t border-white/[0.08]">
          <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider">
            Preferred Movie Format
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {movieFormats.map((fmt) => {
              const isSelected = visualFormat === fmt.id;
              return (
                <div
                  key={fmt.id}
                  onClick={() => setVisualFormat(fmt.id)}
                  className={`cursor-pointer p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-indigo-500/60 bg-indigo-950/20 ring-1 ring-indigo-500/50'
                      : 'border-white/[0.08] bg-slate-900/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{fmt.name}</span>
                    <span className="text-[11px] font-mono text-amber-400 font-semibold">{fmt.duration}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {fmt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages Selection (Original + Target Dubbing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
              Original Production Language
            </label>
            <select
              value={originalLanguage}
              onChange={(e) => setOriginalLanguage(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none font-sans"
            >
              <option value="Japanese (日本語)">Japanese (日本語) — Recommended for Anime Authenticity</option>
              <option value="English">English</option>
              <option value="Korean (한국어)">Korean (한국어)</option>
              <option value="French (Français)">French (Français)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
              Target Multilingual Dubbing Tracks
            </label>
            <div className="flex flex-wrap gap-2">
              {availableLanguages.map((lang) => {
                const isSelected = targetLanguages.includes(lang);
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggleLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/50'
                        : 'bg-white/[0.04] text-slate-400 border border-white/[0.08] hover:text-slate-200'
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Art Direction Notes */}
        <div className="pt-4 border-t border-white/[0.08]">
          <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
            Visual & Lighting Art Direction Guidelines
          </label>
          <input
            type="text"
            value={artDirection}
            onChange={(e) => setArtDirection(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {/* Action Button at bottom */}
        <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Next: Story Analysis Agent extracts characters, acts, and timeline.
          </div>
          <button
            onClick={handleStartAnalysis}
            disabled={!storyText.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Analyze Story & Extract Movie Elements</span>
          </button>
        </div>
      </div>
    </div>
  );
};
