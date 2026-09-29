import React, { useState } from 'react';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Layers, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  Database,
  Plus,
  Compass
} from 'lucide-react';
import { MOCK_ANALYSIS_RESULT } from '../../data/mockData';

export const MovieMemoryStudio: React.FC = () => {
  const [invariants, setInvariants] = useState<string[]>(MOCK_ANALYSIS_RESULT.continuityAnchors);
  const [newInvariantText, setNewInvariantText] = useState<string>('');
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleAddInvariant = (e: React.FormEvent) => {
    e.preventDefault();
    if (newInvariantText.trim()) {
      setInvariants([...invariants, newInvariantText.trim()]);
      setNewInvariantText('');
      setIsAdding(false);
    }
  };

  const memoryNodes = [
    {
      type: 'Inventory & Artifact',
      name: 'Brass Pocket Chronometer',
      owner: 'Kaelen Vane',
      state: 'Active · Cracked glass casing at Scene 05 · Reverse ticking',
      lockStatus: 'Locked Invariant'
    },
    {
      type: 'Physical Marker',
      name: 'Left Wrist Temporal Scar',
      owner: 'Kaelen Vane',
      state: 'Faint golden luminescence whenever time slows',
      lockStatus: 'Locked Invariant'
    },
    {
      type: 'Costume Continuity',
      name: 'Cyan Aero-Pilot Bomber Jacket',
      owner: 'Lyra Solis',
      state: 'Thermal scorch mark on right elbow from Scene 02 escape',
      lockStatus: 'Locked Invariant'
    },
    {
      type: 'Environmental Rule',
      name: 'Twilight Mist Vector',
      owner: 'World: Neo-Elysium',
      state: 'Constant west-to-east atmospheric drift at 4 knots',
      lockStatus: 'Global Physics'
    }
  ];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            MOVIE MEMORY & VISUAL CONTINUITY SUPERVISOR
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Movie Memory & Invariant Graph
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Tracks narrative facts, item locations, costume states, and character wounds across all cuts so nothing morphs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            <span>0 Continuity Violations Detected</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Persistent Memory Nodes */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Database className="h-4 w-4 text-indigo-400" />
              <span>Hierarchical State Graph</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">4 Active State Locks</span>
          </div>

          <div className="space-y-3">
            {memoryNodes.map((node, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 transition-all space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-indigo-400">{node.type}</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-white font-bold">{node.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    {node.lockStatus}
                  </span>
                </div>

                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Bound To:</span>
                  <span className="text-slate-200">{node.owner}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs text-amber-200/90 font-mono">
                  State Rule: {node.state}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Continuity Anchors & Invariant List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Lock className="h-4 w-4 text-emerald-400" />
              <span>Continuity Invariant Anchors</span>
            </h2>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Anchor</span>
            </button>
          </div>

          {isAdding && (
            <form onSubmit={handleAddInvariant} className="p-4 rounded-xl border border-indigo-500/40 bg-indigo-950/20 space-y-3">
              <label className="block text-xs font-semibold text-white">Define New Continuity Invariant</label>
              <input
                type="text"
                value={newInvariantText}
                onChange={(e) => setNewInvariantText(e.target.value)}
                placeholder="e.g. Lyra's ear communicator glows purple when receiving telemetry..."
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-white"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-3 py-1.5 text-xs text-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-500"
                >
                  Save Invariant
                </button>
              </div>
            </form>
          )}

          <div className="space-y-2.5">
            {invariants.map((anchor, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-white/[0.08] bg-slate-900/40 text-xs flex items-start gap-3"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-relaxed">{anchor}</span>
              </div>
            ))}
          </div>

          {/* Engine Note */}
          <div className="p-4 rounded-xl border border-white/10 bg-black/40 text-xs space-y-2">
            <div className="font-semibold text-white flex items-center gap-2">
              <BrainCircuit className="h-4 w-4 text-indigo-400" />
              <span>Autonomous Discrepancy Gate</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Before keyframe rendering or shot assembly, every prompt is cross-referenced with this memory registry. Any hallucinated costume swap or missing artifact triggers an automatic diffusion latent correction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
