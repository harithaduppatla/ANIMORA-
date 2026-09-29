import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  Brain, 
  Users, 
  MapPin, 
  Clock, 
  Bookmark, 
  Film, 
  Layers,
  ArrowRight,
  Database,
  GitBranch,
  ShieldCheck
} from 'lucide-react';
import { StoryAnalysisData } from '../../types';
import { MOCK_ANALYSIS_RESULT } from '../../data/mockData';

interface StoryAnalysisInterfaceProps {
  storyTitle: string;
  storyText: string;
  onComplete: (data: StoryAnalysisData) => void;
  onCancel: () => void;
}

interface AnalysisStep {
  id: number;
  label: string;
  detail: string;
  icon: any;
  status: 'pending' | 'running' | 'completed';
}

export const StoryAnalysisInterface: React.FC<StoryAnalysisInterfaceProps> = ({
  storyTitle,
  storyText,
  onComplete,
  onCancel,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [hierarchicalProgress, setHierarchicalProgress] = useState<number>(12);

  const stepsData: Array<{ label: string; detail: string; icon: any }> = [
    { label: 'Reading story', detail: 'Parsing textual tokens, pacing intervals, and semantic structure...', icon: Bookmark },
    { label: 'Understanding plot', detail: 'Deconstructing core conflict, stakes, and three-act narrative tension...', icon: Brain },
    { label: 'Identifying characters', detail: 'Isolating protagonist, antagonist, and supporting dramatis personae...', icon: Users },
    { label: 'Understanding relationships', detail: 'Mapping emotional vectors, alliances, rivalries, and subtextual bonds...', icon: GitBranch },
    { label: 'Identifying locations', detail: 'Extracting key world environments, spires, and spatial geography...', icon: MapPin },
    { label: 'Understanding timeline', detail: 'Building chronological master timeline and temporal anomalies...', icon: Clock },
    { label: 'Detecting important events', detail: 'Tagging climactic milestones, inciting incidents, and turning points...', icon: Sparkles },
    { label: 'Dividing story into chapters', detail: 'Segmenting narrative into sequential dramatic episode units...', icon: Layers },
    { label: 'Planning scenes', detail: 'Generating shot candidate breakdowns and cinematic camera framings...', icon: Film },
  ];

  useEffect(() => {
    // Step progression timer
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < stepsData.length - 1) {
          const next = prev + 1;
          setLogs((l) => [
            ...l,
            `[Agent: ${stepsData[next].label}] ${stepsData[next].detail}`
          ]);
          setHierarchicalProgress(Math.min(100, Math.round(((next + 1) / stepsData.length) * 100)));
          return next;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete(MOCK_ANALYSIS_RESULT);
          }, 800);
          return prev;
        }
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const handleFastForward = () => {
    setCurrentStepIndex(stepsData.length - 1);
    setHierarchicalProgress(100);
    onComplete(MOCK_ANALYSIS_RESULT);
  };

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
          <Loader2 className="h-3.5 w-3.5 animate-spin text-indigo-400" />
          <span>AUTONOMOUS AGENT PIPELINE RUNNING</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Analyzing Story Narrative
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Deconstructing <strong className="text-slate-200">"{storyTitle}"</strong> using hierarchical story ingestion to map characters, world rules, and cinematic scenes.
        </p>
      </div>

      {/* Hierarchical Processing System Explanation Badge */}
      <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5" />
            HIERARCHICAL LONG-STORY ENGINE ACTIVE
          </span>
          <span className="text-[11px] font-mono text-emerald-400">MEMORY GRAPH COMPLIANT</span>
        </div>
        <p className="text-slate-300 leading-relaxed text-[11px]">
          Instead of repeatedly re-submitting massive text to model prompts, ANIMORA AI chunks the narrative into isolated chapter graphs, tracks character invariant states in memory, and indexes scene anchors hierarchically.
        </p>
      </div>

      {/* Animated Process Steps List */}
      <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl space-y-3">
        {stepsData.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const isPending = index > currentStepIndex;
          const Icon = step.icon;

          return (
            <div
              key={step.label}
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 ${
                isCurrent
                  ? 'border-indigo-500/60 bg-indigo-950/30 shadow-[0_0_15px_rgba(99,102,241,0.2)] ring-1 ring-indigo-500/40'
                  : isCompleted
                  ? 'border-emerald-500/20 bg-emerald-950/10 text-slate-300'
                  : 'border-white/[0.05] bg-white/[0.01] opacity-40 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2 rounded-lg ${
                  isCurrent ? 'bg-indigo-500/20 text-indigo-300' : isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/[0.03] text-slate-500'
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{step.label}</span>
                    <span className="text-[10px] font-mono text-slate-500">Step {index + 1}/9</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {step.detail}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pl-3">
                {isCompleted && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                )}
                {isCurrent && (
                  <Loader2 className="h-4 w-4 text-indigo-400 animate-spin" />
                )}
                {isPending && (
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress & Fast-Forward Bar */}
      <div className="flex items-center justify-between pt-2">
        <div className="text-xs font-mono text-slate-400">
          Progress: <span className="text-white font-bold">{hierarchicalProgress}%</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            className="text-xs text-slate-400 hover:text-slate-200"
          >
            Cancel Analysis
          </button>
          <button
            onClick={handleFastForward}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] text-xs font-medium text-slate-300 hover:bg-white/[0.1] hover:text-white transition-colors"
          >
            <span>Skip to Summary</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
