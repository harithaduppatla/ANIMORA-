import React, { useState } from 'react';
import { 
  Settings, 
  Tv, 
  Sliders, 
  Volume2, 
  Cpu, 
  ShieldCheck, 
  Check,
  RefreshCw
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const [resolution, setResolution] = useState<string>('4K Theatrical (3840 × 2160)');
  const [aspectRatio, setAspectRatio] = useState<string>('2.39:1 CinemaScope Anamorphic');
  const [frameRate, setFrameRate] = useState<string>('24 fps (Classic Anime Theatrical)');
  const [audioMaster, setAudioMaster] = useState<string>('5.1 Surround + Separate Dialogue Stems');
  const [seedStability, setSeedStability] = useState<string>('Strict Invariant (Zero Silhouette Drift)');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            ANIMORA STUDIO CONFIGURATION · PRODUCTION PIPELINE DEFAULTS
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Film Studio Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Configure rendering master resolutions, audio mastering channels, and agent consistency tolerances.
          </p>
        </div>

        {savedSuccess && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
            <Check className="h-3.5 w-3.5" />
            <span>Settings Saved</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Theatrical Video Mastering */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase">
            <Tv className="h-4 w-4" />
            <span>Theatrical Video Engine</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1.5 font-medium">Master Export Resolution</label>
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="4K Theatrical (3840 × 2160)">4K Theatrical (3840 × 2160) — Master Grade</option>
                <option value="2K DCI Flat (2048 × 1080)">2K DCI Flat (2048 × 1080)</option>
                <option value="Full HD 1080p (1920 × 1080)">Full HD 1080p (1920 × 1080) — Fast Preview</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 font-medium">Cinematic Aspect Ratio</label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="2.39:1 CinemaScope Anamorphic">2.39:1 CinemaScope Anamorphic (Widescreen)</option>
                <option value="16:9 Broadcast Wide (1.78:1)">16:9 Broadcast Wide (1.78:1)</option>
                <option value="1.85:1 Academy Flat">1.85:1 Academy Flat</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 font-medium">Frame Cadence & Timing</label>
              <select
                value={frameRate}
                onChange={(e) => setFrameRate(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="24 fps (Classic Anime Theatrical)">24 fps (Classic Anime Theatrical)</option>
                <option value="12 fps (On-Twos Hand-Drawn Stylization)">12 fps (On-Twos Hand-Drawn Stylization)</option>
                <option value="30 fps (Broadcast Television)">30 fps (Broadcast Television)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 font-medium">Seed Latent Stability</label>
              <select
                value={seedStability}
                onChange={(e) => setSeedStability(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Strict Invariant (Zero Silhouette Drift)">Strict Invariant (Zero Silhouette Drift)</option>
                <option value="Balanced (Expressive Lighting Variations)">Balanced (Expressive Lighting Variations)</option>
                <option value="Dynamic (Maximum Choreographic Freedom)">Dynamic (Maximum Choreographic Freedom)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Audio & Acoustic Dubbing Engine */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase">
            <Volume2 className="h-4 w-4" />
            <span>Acoustic Mastering & Stems</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1.5 font-medium">Multi-Track Sound Packaging</label>
              <select
                value={audioMaster}
                onChange={(e) => setAudioMaster(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="5.1 Surround + Separate Dialogue Stems">5.1 Surround + Separate Dialogue Stems</option>
                <option value="Binaural Spatial Stereo">Binaural Spatial Stereo</option>
                <option value="Stereo Master Only">Stereo Master Only</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 font-medium">Lip-Sync Keyframe Precision</label>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Phoneme-to-mouth flap matching</span>
                <span className="font-mono text-emerald-400 font-bold">±0.04s Sub-Frame</span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Action */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
          <div className="text-xs text-slate-500">
            Changes apply automatically to all newly initiated movie projects.
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            <Check className="h-4 w-4" />
            <span>Save Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
};
