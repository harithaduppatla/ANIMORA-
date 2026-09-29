import React, { useState } from 'react';
import { 
  Clapperboard, 
  Camera, 
  Plus, 
  Play, 
  Film, 
  Sliders, 
  Sun, 
  Move, 
  Maximize, 
  Clock, 
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Scene, Shot } from '../../types';

interface SceneStudioProps {
  scenes: Scene[];
  onAddShot?: (sceneId: string, shot: Partial<Shot>) => void;
}

export const SceneStudio: React.FC<SceneStudioProps> = ({ scenes }) => {
  const [selectedSceneId, setSelectedSceneId] = useState<string>(scenes[0]?.id || '');
  const [activeShotPreview, setActiveShotPreview] = useState<Shot | null>(scenes[0]?.shots[0] || null);

  const selectedScene = scenes.find(s => s.id === selectedSceneId) || scenes[0];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            SCENE & SHOT PLANNING STUDIO · CINEMATOGRAPHY ENGINE
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Scene Breakdown & Storyboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Autonomous shot blocking, lens choices, dynamic lighting keys, and frame composition per dramatic beat.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-lg">
            <span>Ratio: 2.39:1 Anamorphic</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Scene Selector on Left, Shot Planning on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Scenes List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-1">
            <span>SCENES TIMELINE ({scenes.length})</span>
            <span>CHAPTER 01</span>
          </div>

          <div className="space-y-3">
            {scenes.map((sc) => {
              const isSelected = sc.id === selectedScene?.id;
              return (
                <div
                  key={sc.id}
                  onClick={() => {
                    setSelectedSceneId(sc.id);
                    setActiveShotPreview(sc.shots[0] || null);
                  }}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-950/30 shadow-[0_0_20px_rgba(99,102,241,0.2)] ring-1 ring-indigo-500/40'
                      : 'border-white/[0.08] bg-slate-900/40 hover:bg-slate-900/70 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono text-amber-400 font-semibold">
                      Scene {sc.sceneNumber} · {sc.timeOfDay}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {sc.shots.length} Shots
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1.5">{sc.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {sc.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/[0.06] text-[10px] text-slate-500 font-mono">
                    <span>Location: {sc.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Scene Detail & Shot Board */}
        <div className="lg:col-span-8 space-y-6">
          {selectedScene && (
            <>
              {/* Scene Key Visual Banner */}
              {selectedScene.keyVisualUrl && (
                <div className="relative rounded-2xl overflow-hidden aspect-[21/9] border border-white/10 group">
                  <img
                    src={selectedScene.keyVisualUrl}
                    alt={selectedScene.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
                    <div className="text-xs font-mono text-indigo-400 mb-1">
                      KEY VISUAL FRAME · SCENE {selectedScene.sceneNumber}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      {selectedScene.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <span>{selectedScene.location}</span>
                      <span className="text-slate-500">·</span>
                      <span>Mood: {selectedScene.mood}</span>
                      <span className="text-slate-500">·</span>
                      <span>Weather: {selectedScene.weather}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Shot Breakdown List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    <span>Cinematic Shot Breakdown</span>
                  </div>
                  <span className="text-slate-400 font-mono">
                    Total Duration: {selectedScene.shots.reduce((a, b) => a + b.durationSeconds, 0)}s
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedScene.shots.map((shot, idx) => (
                    <div
                      key={shot.id}
                      className="p-4 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 transition-all space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-amber-300">
                            Shot {String(shot.shotNumber).padStart(2, '0')}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-white font-medium">{shot.cameraAngle}</span>
                          <span className="text-slate-500">({shot.focalLength})</span>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] font-mono">
                          <span className="text-slate-400">{shot.durationSeconds}s duration</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            shot.status === 'rendered' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30' : 'bg-indigo-950/40 text-indigo-400 border border-indigo-500/30'
                          }`}>
                            {shot.status.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Technical specifications */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                        <div>
                          <span className="text-slate-500">Camera Movement:</span>{' '}
                          <span className="text-slate-300">{shot.movement}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Lighting Key:</span>{' '}
                          <span className="text-slate-300">{shot.lighting}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-300 leading-relaxed">
                        <strong className="text-slate-400 font-normal">Action Prompt:</strong> {shot.actionPrompt}
                      </div>

                      {shot.dialogueSnippet && (
                        <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/20 text-xs space-y-1">
                          <div className="text-[11px] font-mono text-indigo-300">
                            Dialogue · {shot.speaker}
                          </div>
                          <p className="text-amber-200 italic font-medium">
                            "{shot.dialogueSnippet}"
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
