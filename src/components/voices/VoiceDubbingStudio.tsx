import React, { useState } from 'react';
import { 
  Mic2, 
  Play, 
  Pause, 
  Volume2, 
  Languages, 
  Sliders, 
  Globe, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CharacterProfile } from '../../types';

interface VoiceDubbingStudioProps {
  characters: CharacterProfile[];
}

export const VoiceDubbingStudio: React.FC<VoiceDubbingStudioProps> = ({ characters }) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(characters[0]?.id || '');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Japanese (日本語)');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [pitch, setPitch] = useState<number>(0);
  const [emotionalIntensity, setEmotionalIntensity] = useState<number>(75);
  const [speakingRate, setSpeakingRate] = useState<number>(1.0);

  const selectedChar = characters.find(c => c.id === selectedCharacterId) || characters[0];

  const languages = [
    { id: 'Japanese (日本語)', label: 'Japanese (Original Stems)', flag: 'JP', phonemes: '100% Native Lip Match' },
    { id: 'English', label: 'English (Theatrical Dub)', flag: 'EN', phonemes: 'Phonetic Adaptation' },
    { id: 'French', label: 'French (Version Française)', flag: 'FR', phonemes: 'Cadence Matched' },
    { id: 'Spanish', label: 'Spanish (Castellano / Latam)', flag: 'ES', phonemes: 'Cadence Matched' },
    { id: 'German', label: 'German (Deutsche Fassung)', flag: 'DE', phonemes: 'Acoustic Synced' }
  ];

  const localizedLines: Record<string, Record<string, string>> = {
    char_kael: {
      'Japanese (日本語)': 'すべての秒針の刻みは、別の人生で破った約束だ。今回は違う。',
      'English': 'Every tick of this watch is a promise I broke in another life. Not this time.',
      'French': 'Chaque tic-tac de cette montre est une promesse brisée dans une autre vie. Pas cette fois.',
      'Spanish': 'Cada tic-tac de este reloj es una promesa rota en otra vida. No esta vez.',
      'German': 'Jedes Ticken dieser Uhr ist ein gebrochenes Versprechen aus einem anderen Leben. Nicht dieses Mal.'
    },
    char_lyra: {
      'Japanese (日本語)': 'タイムラインが崩壊したなら、もっと強靭なエンジンを設計するだけよ。',
      'English': 'If your timeline already collapsed, Kael, then we just need to build a better engine for this one.',
      'French': 'Si ta ligne temporelle s’est effondrée, Kael, nous devons simplement fabriquer un meilleur moteur.',
      'Spanish': 'Si tu línea temporal ya colapsó, Kael, entonces solo necesitamos construir un mejor motor para esta.',
      'German': 'Wenn deine Zeitlinie bereits kollabiert ist, müssen wir eben einen besseren Antrieb bauen.'
    },
    char_zephir: {
      'Japanese (日本語)': '幾千の涙のために現実を歪めるなど許されぬ。秩序こそが至高だ。',
      'English': 'You fracture reality to save a handful of tears. Order will reclaim what you stole.',
      'French': 'Tu fractures la réalité pour sauver une poignée de larmes. L’ordre reprendra ce que tu as volé.',
      'Spanish': 'Fracturas la realidad para salvar unas pocas lágrimas. El orden reclamará lo que robaste.',
      'German': 'Du brichst die Realität für eine Handvoll Tränen. Die Ordnung wird sich zurückholen, was du stahlst.'
    }
  };

  const currentLine = localizedLines[selectedChar?.id]?.[selectedLanguage] || selectedChar?.sampleLine;

  const togglePlay = () => {
    setIsPlayingAudio(!isPlayingAudio);
    if (!isPlayingAudio) {
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 4500);
    }
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            VOICE GENERATION & MULTILINGUAL DUBBING STUDIO
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Voice Casting & Lip-Sync Alignment
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Synthesizes emotive anime vocal acting, breathing cadences, and frame-accurate phonetic mouth flap synchronization.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Neural Acoustic Renderer Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Character Selection */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-slate-400 pb-1">
            CHARACTER VOICE ROSTER
          </div>

          <div className="space-y-3">
            {characters.map((char) => {
              const isSelected = char.id === selectedChar.id;
              return (
                <div
                  key={char.id}
                  onClick={() => {
                    setSelectedCharacterId(char.id);
                    setIsPlayingAudio(false);
                  }}
                  className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-950/30 shadow-[0_0_20px_rgba(99,102,241,0.2)] ring-1 ring-indigo-500/40'
                      : 'border-white/[0.08] bg-slate-900/40 hover:bg-slate-900/70 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={char.avatarUrl}
                      alt={char.name}
                      referrerPolicy="no-referrer"
                      className="h-12 w-12 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{char.name}</h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5 font-mono">
                        {char.voiceActorArchetype.split('(')[0]}
                      </p>
                      <div className="text-[10px] text-indigo-400 mt-0.5">
                        Dub tracks: 5 languages synced
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Audio Canvas & Controls */}
        <div className="lg:col-span-8 space-y-6">
          {/* Target Language Selection Tabs */}
          <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <Languages className="h-4 w-4" />
                <span>Select Dubbing Language Track</span>
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                Active: {selectedLanguage}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {languages.map((lang) => {
                const isActive = selectedLanguage === lang.id;
                return (
                  <button
                    key={lang.id}
                    onClick={() => {
                      setSelectedLanguage(lang.id);
                      setIsPlayingAudio(false);
                    }}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      isActive
                        ? 'border-indigo-500 bg-indigo-950/40 text-white'
                        : 'border-white/[0.08] bg-black/30 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-xs flex items-center justify-between mb-1">
                      <span>{lang.flag}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />}
                    </div>
                    <div className="text-[11px] font-medium truncate">{lang.id.split(' ')[0]}</div>
                    <div className="text-[9px] text-slate-500 truncate mt-0.5">{lang.phonemes}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Player & Dialogue Preview */}
          <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-amber-400 mb-1">
                  CASTED ARCHETYPE: {selectedChar.voiceActorArchetype}
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {selectedChar.name} · Vocal Performance
                </h3>
              </div>

              <button
                onClick={togglePlay}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all"
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="h-4 w-4" />
                    <span>Stop Preview</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-white" />
                    <span>Play Synthesized Audio</span>
                  </>
                )}
              </button>
            </div>

            {/* Synthesized Dialogue Line Box */}
            <div className="p-5 rounded-xl bg-black/50 border border-white/[0.08] space-y-3">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>LOCALIZED SCRIPT SNIPPET</span>
                <span>TIMECODE 00:14:48</span>
              </div>
              <p className="text-base text-amber-200 font-medium leading-relaxed">
                "{currentLine}"
              </p>
              {selectedLanguage !== 'English' && (
                <p className="text-xs text-slate-400 italic">
                  Translation: "{localizedLines[selectedChar?.id]?.['English'] || selectedChar.sampleLine}"
                </p>
              )}
            </div>

            {/* Animated Audio Waveform & Phoneme Flaps */}
            <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/[0.05]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>SPEECH ACOUSTIC WAVEFORM</span>
                <span className={isPlayingAudio ? 'text-emerald-400' : 'text-slate-500'}>
                  {isPlayingAudio ? 'PLAYING · LIP FLAPS ACTIVE' : 'IDLE'}
                </span>
              </div>

              <div className="flex items-end gap-1 h-12">
                {[20, 45, 60, 30, 85, 95, 65, 40, 75, 90, 50, 35, 80, 70, 45, 60, 95, 85, 40, 55, 70, 85, 60, 40, 30, 50, 75, 90, 45, 30].map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-150 ${
                      isPlayingAudio ? 'bg-indigo-400' : 'bg-slate-700/50'
                    }`}
                    style={{
                      height: isPlayingAudio ? `${Math.max(15, (h * (Math.sin(i + Date.now() / 200) + 1.2)) % 100)}%` : `${h * 0.4}%`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Voice Tuning Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Pitch Offset</span>
                  <span className="font-mono text-amber-400">{pitch > 0 ? `+${pitch}` : pitch} st</span>
                </div>
                <input
                  type="range"
                  min="-6"
                  max="6"
                  value={pitch}
                  onChange={(e) => setPitch(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Emotional Intensity</span>
                  <span className="font-mono text-amber-400">{emotionalIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={emotionalIntensity}
                  onChange={(e) => setEmotionalIntensity(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Cadence Rate</span>
                  <span className="font-mono text-amber-400">{speakingRate}x</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="1.3"
                  step="0.05"
                  value={speakingRate}
                  onChange={(e) => setSpeakingRate(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
