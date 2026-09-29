import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Film, 
  Users, 
  Layers, 
  Mic2, 
  Volume2, 
  ShieldCheck, 
  Compass, 
  Tv, 
  FileText, 
  Brain, 
  Globe, 
  Camera, 
  Sliders, 
  Languages, 
  CheckCircle2, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { PIPELINE_STAGES, HERO_IMAGE, PRODUCTION_SHOT_IMAGE, KAEL_PORTRAIT, LYRA_PORTRAIT } from '../../data/mockData';
import { ActiveTab } from '../../types';

interface LandingPageProps {
  onStartCreating: () => void;
  onExploreStudio: (tab?: ActiveTab) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartCreating,
  onExploreStudio,
}) => {
  const [activeTransformationStep, setActiveTransformationStep] = useState<number>(0);
  const [selectedPipelineStage, setSelectedPipelineStage] = useState<number>(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const transformationSteps = [
    {
      title: 'Story',
      label: 'Input Narrative',
      description: 'Manuscripts, web novels, or screenplay drafts are ingested and parsed for subtext.',
      previewType: 'text',
      content: {
        title: 'The Chrono-Archon’s Vow — Chapter 1',
        text: 'The bell of the St. Aethelgard clocktower tolled twelve times, yet the amber shadows across Neo-Elysium refused to lengthen. Kaelen pulled his traveling cloak tighter against the altitude wind, his brass pocket chronometer ticking backward against his palm...'
      }
    },
    {
      title: 'Characters',
      label: 'Persona & Silhouette',
      description: 'Extracts psychological depth, costume details, hair silhouettes, and strict facial seeds.',
      previewType: 'character',
      content: {
        name: 'Kaelen Vane',
        role: 'Protagonist · Chronomancer',
        features: 'Windswept silver hair, iridescent amber irises with concentric clockwork rings, bronze duster',
        image: KAEL_PORTRAIT
      }
    },
    {
      title: 'Scenes',
      label: 'Cinematic Staging',
      description: 'Calculates dramatic pacing, lighting palettes, camera movement, and optical anamorphic lensing.',
      previewType: 'scene',
      content: {
        title: 'Scene 02: Sanctuary in the Cyber-Shrine',
        lighting: 'Golden volumetric twilight rays through bamboo canopy',
        camera: 'Medium Two-Shot, 180° slow orbit (50mm Cine)',
        image: PRODUCTION_SHOT_IMAGE
      }
    },
    {
      title: 'Voices',
      label: 'Acoustic Casting',
      description: 'Synthesizes authentic Japanese and multilingual anime voice acting with emotive inflection.',
      previewType: 'voice',
      content: {
        actor: 'Hiroshi T. Archetype (Quiet Determination Tenor)',
        line: '「すべての秒針の刻みは、別の人生で破った約束だ。今回は違う。」',
        enLine: '"Every tick of this watch is a promise I broke in another life. Not this time."',
        status: 'Dub tracks: Japanese (Original), English, French, Spanish'
      }
    },
    {
      title: 'Movie',
      label: 'Mastered Feature',
      description: 'Continuity-checked, timed to custom orchestral score, lip-synced and rendered in 4K HDR.',
      previewType: 'movie',
      content: {
        title: 'The Chrono-Archon’s Vow (2026)',
        runtime: '88 Minutes · Theatrical Cut',
        image: HERO_IMAGE
      }
    }
  ];

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="h-5 w-5" />;
      case 'Brain': return <Brain className="h-5 w-5" />;
      case 'Users': return <Users className="h-5 w-5" />;
      case 'Globe': return <Globe className="h-5 w-5" />;
      case 'Film': return <Film className="h-5 w-5" />;
      case 'Camera': return <Camera className="h-5 w-5" />;
      case 'Sparkles': return <Sparkles className="h-5 w-5" />;
      case 'Mic': return <Mic2 className="h-5 w-5" />;
      case 'Languages': return <Languages className="h-5 w-5" />;
      case 'ShieldCheck': return <ShieldCheck className="h-5 w-5" />;
      case 'Sliders': return <Sliders className="h-5 w-5" />;
      case 'Tv': return <Tv className="h-5 w-5" />;
      default: return <Film className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 selection:bg-indigo-500/30">
      {/* Subtle Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-950/40 via-violet-950/20 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[800px] -left-40 w-[600px] h-[600px] bg-cyan-950/20 blur-3xl rounded-full" />
        <div className="absolute top-[1400px] -right-40 w-[600px] h-[600px] bg-indigo-950/25 blur-3xl rounded-full" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Brand Tagline Header */}
          <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-medium tracking-wide text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <span>Autonomous Anime Filmmaking Platform</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Agentic Production Engine</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white text-balance leading-[1.08] mb-6">
            Turn Any Story Into an <span className="bg-gradient-to-r from-indigo-200 via-indigo-400 to-amber-300 bg-clip-text text-transparent">Anime Movie</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
            ANIMORA AI orchestrates specialized autonomous agents to deconstruct your manuscript, sculpt character model sheets, choreograph cinematic scenes, generate emotive voices, and assemble a coherent, feature-length anime.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onStartCreating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Create Your Movie</span>
              <ArrowRight className="h-4 w-4 text-indigo-200" />
            </button>

            <button
              onClick={() => onExploreStudio('dashboard')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-white/25 active:scale-[0.98]"
            >
              <Compass className="h-4 w-4 text-slate-400" />
              <span>Explore Platform</span>
            </button>
          </div>

          {/* Brand Tagline Display */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-wider text-slate-500 uppercase font-mono">
            <span>Your Story</span>
            <span className="text-indigo-400 font-bold">/</span>
            <span>Our AI</span>
            <span className="text-indigo-400 font-bold">/</span>
            <span>One Complete Anime</span>
          </div>
        </div>

        {/* CINEMATIC TRANSFORMATION VISUAL */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
            {/* Transformation Stepper Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 overflow-x-auto gap-2">
              {transformationSteps.map((step, idx) => {
                const isActive = activeTransformationStep === idx;
                return (
                  <button
                    key={step.title}
                    onClick={() => setActiveTransformationStep(idx)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      isActive 
                        ? 'bg-indigo-600/30 text-white border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.25)]' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full text-[11px] font-mono ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {idx + 1}
                    </span>
                    <span>{step.title}</span>
                    {idx < transformationSteps.length - 1 && (
                      <ChevronRight className="h-3 w-3 text-slate-600 hidden sm:inline-block ml-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Interactive Step Preview Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Stage description */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                  <span>Transformation Phase {activeTransformationStep + 1} of 5</span>
                  <span>·</span>
                  <span>{transformationSteps[activeTransformationStep].label}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {transformationSteps[activeTransformationStep].title} Stage
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {transformationSteps[activeTransformationStep].description}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (activeTransformationStep === 4) {
                        onStartCreating();
                      } else {
                        setActiveTransformationStep((prev) => (prev + 1) % transformationSteps.length);
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    <span>{activeTransformationStep === 4 ? 'Launch Your Movie' : 'Next Transformation Step'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Preview Canvas */}
              <div className="lg:col-span-7">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-inner group">
                  {activeTransformationStep === 0 && (
                    <div className="p-6 h-full flex flex-col justify-between font-mono text-xs text-slate-300 bg-slate-950/80">
                      <div>
                        <div className="flex items-center justify-between text-indigo-400 pb-3 border-b border-white/10 mb-3 text-[11px]">
                          <span>SOURCE_DOCUMENT: manuscript_chrono_vow.txt</span>
                          <span>SYNTAX: PARSED</span>
                        </div>
                        <p className="text-sm font-semibold text-white mb-2 font-sans">
                          {transformationSteps[0].content.title}
                        </p>
                        <p className="text-slate-300 font-sans leading-relaxed text-xs sm:text-sm">
                          {transformationSteps[0].content.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-3 border-t border-white/10">
                        <span>Word Count: 14,820</span>
                        <span>·</span>
                        <span>Reading Complexity: Theatrical Cinematic</span>
                      </div>
                    </div>
                  )}

                  {activeTransformationStep === 1 && (
                    <div className="h-full flex flex-col sm:flex-row bg-slate-950">
                      <div className="w-full sm:w-1/2 h-44 sm:h-full relative overflow-hidden">
                        <img 
                          src={KAEL_PORTRAIT} 
                          alt="Character Design Sheet" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:bg-gradient-to-r" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between text-xs space-y-3">
                        <div>
                          <div className="text-[11px] font-mono text-amber-400 mb-1">CHARACTER SHEET MATRIX</div>
                          <h4 className="text-lg font-bold text-white">{transformationSteps[1].content.name}</h4>
                          <div className="text-slate-400 text-xs mb-3">{transformationSteps[1].content.role}</div>
                          <p className="text-slate-300 text-xs leading-relaxed">
                            {transformationSteps[1].content.features}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-white/10 pt-2 font-mono">
                          <span>FACIAL SEED: #88419-LOCKED</span>
                          <span className="text-emerald-400">100% CONSISTENT</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTransformationStep === 2 && (
                    <div className="relative h-full w-full">
                      <img 
                        src={PRODUCTION_SHOT_IMAGE} 
                        alt="Scene Staging" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
                        <div className="text-xs font-mono text-cyan-400 mb-1">SCENE 02 · SHOT 01 · 50mm ANAMORPHIC</div>
                        <h4 className="text-base font-bold text-white mb-1">{transformationSteps[2].content.title}</h4>
                        <p className="text-xs text-slate-300">{transformationSteps[2].content.lighting}</p>
                      </div>
                    </div>
                  )}

                  {activeTransformationStep === 3 && (
                    <div className="p-6 h-full flex flex-col justify-between bg-slate-950/90">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
                          <Mic2 className="h-4 w-4" />
                          <span>SYNTHETIC VOICE & LIP-SYNC ENGINE</span>
                        </div>
                        <p className="text-xs text-slate-400 mb-4">{transformationSteps[3].content.actor}</p>
                        <div className="p-3.5 rounded-lg bg-white/[0.04] border border-white/10 space-y-2 mb-4">
                          <p className="text-base font-medium text-amber-200">
                            {transformationSteps[3].content.line}
                          </p>
                          <p className="text-xs text-slate-300 italic">
                            {transformationSteps[3].content.enLine}
                          </p>
                        </div>
                      </div>
                      
                      {/* Audio Waveform simulation */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 h-8">
                          {[35, 60, 45, 90, 75, 40, 65, 80, 50, 95, 70, 30, 85, 45, 60, 90, 40, 55, 70, 85, 60, 40, 30].map((h, i) => (
                            <span 
                              key={i} 
                              className="flex-1 bg-indigo-500/70 rounded-full transition-all duration-300 hover:bg-indigo-400"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                          <span>JP (Master Stems)</span>
                          <span>Phoneme Accuracy: 99.4%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTransformationStep === 4 && (
                    <div className="relative h-full w-full">
                      <img 
                        src={HERO_IMAGE} 
                        alt="Final Anime Movie" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-amber-300 border border-amber-500/30">
                            4K HDR MASTER
                          </span>
                          <span className="text-xs text-white/80 font-mono">THEATRICAL ASSEMBLY</span>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">
                            The Chrono-Archon’s Vow
                          </h4>
                          <p className="text-xs text-slate-300 mb-3">
                            Feature Film · 88 min · Full Japanese Cast + Multilingual Dubs
                          </p>
                          <button
                            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                            className="inline-flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-white/30 transition-all border border-white/20"
                          >
                            <Play className="h-3 w-3 fill-white" />
                            <span>{isVideoPlaying ? 'Pause Trailer Preview' : 'Play Cinematic Preview'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS — THE 12-STAGE AI FILMMAKING PIPELINE */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.07]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 mb-3 uppercase tracking-wider">
            <span>Autonomous Pipeline</span>
            <span>·</span>
            <span>12 Specialised Agents</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-balance">
            Filmmaking requires hundreds of distinct artistic disciplines. ANIMORA AI decomposes the process into an interconnected multi-agent graph—ensuring narrative coherence, character permanence, and cinematic flair from the first sentence to the end credits.
          </p>
        </div>

        {/* 12 Stages Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PIPELINE_STAGES.map((stage) => {
            const isSelected = selectedPipelineStage === stage.id;
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedPipelineStage(stage.id)}
                className={`cursor-pointer rounded-xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected 
                    ? 'border-indigo-500/50 bg-indigo-950/20 shadow-[0_0_20px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/40' 
                    : 'border-white/[0.08] bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-500 font-semibold">
                      {String(stage.id).padStart(2, '0')}
                    </span>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/[0.04] text-slate-400'}`}>
                      {getStageIcon(stage.iconName)}
                    </div>
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-1">
                    {stage.name}
                  </h3>

                  <div className="text-[11px] font-mono text-indigo-400/90 mb-2">
                    {stage.agentRole}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-400">{stage.category} Discipline</span>
                  <span className="text-indigo-400/70 font-mono">Stage {stage.id}/12</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="mt-8 rounded-xl border border-white/10 bg-slate-950/60 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-indigo-400">
              Selected Phase · Stage {selectedPipelineStage}: {PIPELINE_STAGES[selectedPipelineStage - 1].name}
            </div>
            <p className="text-sm text-slate-300">
              Operated by the <strong className="text-white">{PIPELINE_STAGES[selectedPipelineStage - 1].agentRole}</strong>. 
              {PIPELINE_STAGES[selectedPipelineStage - 1].description}
            </p>
          </div>
          <button
            onClick={onStartCreating}
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
          >
            <span>Run Pipeline With Your Story</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* 3. CAPABILITIES / CORE ADVANTAGES BENTO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.07]">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">
            Architectural Differentiation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Why Generic AI Can’t Make Long-Form Anime
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Standard video generators collapse after 4 seconds: characters morph, clothing transforms, voices change tone, and plot logic dissolves. ANIMORA AI was engineered from first principles for long-form narrative permanence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Hierarchical Long-Form Ingestion */}
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Hierarchical Memory Graph
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Rather than shoving 80,000 words into a single context window repeatedly, our system decomposes the story into narrative chapters, scene invariants, and character state vectors that maintain global continuity.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-4 border-t border-white/[0.06]">
              Handles up to 150,000 word manuscripts
            </div>
          </div>

          {/* Card 2: 100% Visual Consistency Engine */}
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Permanent Character Silhouettes
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Rigorous seed locks and turnaround model sheets guarantee that your protagonist has the exact same hair gradient, eye reflections, and costume damage across 200+ cuts.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-4 border-t border-white/[0.06]">
              Zero facial drifting across scene cuts
            </div>
          </div>

          {/* Card 3: Multilingual Dubbing & Lip-Sync */}
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
                <Languages className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Acoustic Dubbing & Lip Timing
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                Authentic anime vocal archetypes with emotive breathing, scream cadences, and whispered cadence—automatically mapped to mouth flap keyframes in Japanese, English, and beyond.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-4 border-t border-white/[0.06]">
              Frame-accurate phoneme alignment
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROOF / METRICS ADJACENCY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.07]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
              12 Stages
            </div>
            <div className="text-xs text-slate-400">Autonomous Filmmaking Pipeline</div>
          </div>
          <div className="p-4">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400">Seed-Locked Character Consistency</div>
          </div>
          <div className="p-4">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
              5+ Languages
            </div>
            <div className="text-xs text-slate-400">Phonetic Dubbing & Lip-Sync</div>
          </div>
          <div className="p-4">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
              4K HDR
            </div>
            <div className="text-xs text-slate-400">Theatrical Master Package Output</div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION decision block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 via-slate-950/80 to-[#07080d] p-8 sm:p-14 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Direct Your Anime Masterpiece?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Paste your story draft or upload a document to begin the hierarchical analysis. Your characters and world are waiting to come alive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartCreating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-[1.02] transition-all"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Create Your Movie Now</span>
            </button>
            <button
              onClick={() => onExploreStudio('dashboard')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-slate-200 hover:bg-white/[0.1] transition-all"
            >
              <Compass className="h-4 w-4" />
              <span>Open Studio Dashboard</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. QUIET FOOTER */}
      <footer className="border-t border-white/[0.07] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span>ANIMORA AI</span>
            <span className="text-slate-600 font-sans font-normal ml-2">Your Story. Our AI. One Complete Anime.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onExploreStudio('dashboard')} className="hover:text-slate-300 transition-colors">
              Studio Dashboard
            </button>
            <button onClick={() => onExploreStudio('characters')} className="hover:text-slate-300 transition-colors">
              Character Studio
            </button>
            <button onClick={() => onExploreStudio('scenes')} className="hover:text-slate-300 transition-colors">
              Scene Planner
            </button>
            <button onClick={() => onExploreStudio('voices')} className="hover:text-slate-300 transition-colors">
              Dubbing
            </button>
          </div>

          <div className="font-mono text-[11px] text-slate-600">
            © 2026 ANIMORA AI Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
