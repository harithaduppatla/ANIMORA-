import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Edit3, 
  Sparkles, 
  HeartHandshake, 
  Eye, 
  Scissors, 
  Shirt, 
  Mic2, 
  ChevronRight,
  Check,
  X
} from 'lucide-react';
import { CharacterProfile, CharacterRelationship } from '../../types';
import { KAEL_PORTRAIT, LYRA_PORTRAIT, PRODUCTION_SHOT_IMAGE } from '../../data/mockData';

interface CharacterStudioProps {
  characters: CharacterProfile[];
  onUpdateCharacter: (updated: CharacterProfile) => void;
  onAddCharacter: (newChar: CharacterProfile) => void;
}

export const CharacterStudio: React.FC<CharacterStudioProps> = ({
  characters,
  onUpdateCharacter,
  onAddCharacter,
}) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(characters[0]?.id || '');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);

  const selectedChar = characters.find(c => c.id === selectedCharacterId) || characters[0];

  // Edit form state
  const [formData, setFormData] = useState<CharacterProfile>(selectedChar);

  // When switching selected character
  const handleSelectChar = (char: CharacterProfile) => {
    setSelectedCharacterId(char.id);
    setFormData(char);
    setIsEditing(false);
    setIsAddingNew(false);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCharacter(formData);
    setIsEditing(false);
  };

  const handleToggleLock = () => {
    const updated = { ...selectedChar, consistencyLock: !selectedChar.consistencyLock };
    onUpdateCharacter(updated);
    setFormData(updated);
  };

  const handleAddNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newChar: CharacterProfile = {
      ...formData,
      id: `char_${Date.now()}`,
      movieId: 'mov_chrono_01',
      avatarUrl: PRODUCTION_SHOT_IMAGE,
      consistencyLock: true
    };
    onAddCharacter(newChar);
    setSelectedCharacterId(newChar.id);
    setIsAddingNew(false);
    setIsEditing(false);
  };

  const openNewForm = () => {
    setFormData({
      id: '',
      movieId: 'mov_chrono_01',
      name: 'New Character',
      japaneseTitle: '新規キャラクター',
      age: 20,
      role: 'Supporting',
      appearance: 'Distinctive silhouette, agile posture, keen observational glance.',
      personality: 'Intuitive, steadfast, resourceful under pressure.',
      hairstyle: 'Tousled jet black hair with bangs framing the cheekbones.',
      eyeCharacteristics: 'Sharp obsidian irises with high dynamic highlights.',
      clothing: 'Utility traveling coat with concealed gear pockets and lightweight protective bracers.',
      relationships: [
        {
          targetCharacterName: selectedChar.name,
          relationType: 'Allied Informant',
          dynamicDescription: 'Provides underground intelligence and reconnaissance.'
        }
      ],
      voiceActorArchetype: 'Expressive Mid-Range (Versatile Actor)',
      vocalTone: 'Clear, steady, carrying a slight dry wit in dialogue.',
      sampleLine: 'The sky doesn’t wait for second thoughts.',
      avatarUrl: PRODUCTION_SHOT_IMAGE,
      consistencyLock: true,
      colorTheme: '#8b5cf6'
    });
    setIsAddingNew(true);
    setIsEditing(true);
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 mb-1">
            CHARACTER STUDIO · SILHOUETTE & MODEL SHEET ENGINE
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Character Profile Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Extracted from narrative analysis. Locked character geometry ensures zero morphing across anime cuts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openNewForm}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:from-indigo-400 hover:to-indigo-500 transition-all"
          >
            <Plus className="h-4 w-4" />
            <span>Add Character Profile</span>
          </button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Character Selection Cards */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-1">
            <span>CAST ROSTER ({characters.length})</span>
            <span className="text-emerald-400">ALL SEEDS LOCKED</span>
          </div>

          <div className="space-y-3">
            {characters.map((char) => {
              const isSelected = char.id === selectedChar?.id && !isAddingNew;
              return (
                <div
                  key={char.id}
                  onClick={() => handleSelectChar(char)}
                  className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
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
                      className="h-12 w-12 rounded-lg object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-white truncate">{char.name}</h4>
                        {char.japaneseTitle && (
                          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline truncate">
                            {char.japaneseTitle}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate mt-0.5">
                        {char.role} · Age {char.age}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    {char.consistencyLock ? (
                      <Lock className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Unlock className="h-3.5 w-3.5 text-amber-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Seed Consistency Note */}
          <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 text-xs space-y-2">
            <div className="font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Facial Geometry Invariance</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              When consistency lock is enabled, turnaround angles, lighting shading, and hair geometry will strictly reference this character’s base latent seeds.
            </p>
          </div>
        </div>

        {/* Right Column: Character Profile Sheet & Relationships */}
        <div className="lg:col-span-8">
          {selectedChar && !isEditing ? (
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl space-y-6">
              {/* Header inside profile */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedChar.avatarUrl}
                    alt={selectedChar.name}
                    referrerPolicy="no-referrer"
                    className="h-16 w-16 rounded-xl object-cover border border-white/15 shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-display text-xl font-bold text-white">{selectedChar.name}</h2>
                      {selectedChar.japaneseTitle && (
                        <span className="text-xs text-amber-300 font-mono">{selectedChar.japaneseTitle}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <span>Role: <strong className="text-slate-200">{selectedChar.role}</strong></span>
                      <span className="text-slate-600">·</span>
                      <span>Age: <strong className="text-slate-200">{selectedChar.age}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleLock}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      selectedChar.consistencyLock
                        ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300'
                        : 'border-amber-500/40 bg-amber-950/20 text-amber-300'
                    }`}
                  >
                    {selectedChar.consistencyLock ? (
                      <>
                        <Lock className="h-3 w-3" />
                        <span>Consistency Locked</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="h-3 w-3" />
                        <span>Unlocked</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setFormData(selectedChar);
                      setIsEditing(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/[0.04] text-xs font-medium text-slate-200 hover:bg-white/[0.08] transition-colors"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>

              {/* Core Physical & Aesthetic Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06] space-y-1.5">
                  <div className="text-[11px] font-mono text-indigo-400 uppercase flex items-center gap-1.5">
                    <Scissors className="h-3.5 w-3.5" />
                    <span>Hairstyle & Silhouette</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedChar.hairstyle}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06] space-y-1.5">
                  <div className="text-[11px] font-mono text-indigo-400 uppercase flex items-center gap-1.5">
                    <Eye className="h-3.5 w-3.5" />
                    <span>Eye Characteristics & Reflections</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedChar.eyeCharacteristics}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06] space-y-1.5 md:col-span-2">
                  <div className="text-[11px] font-mono text-indigo-400 uppercase flex items-center gap-1.5">
                    <Shirt className="h-3.5 w-3.5" />
                    <span>Signature Clothing & Costume Anchors</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedChar.clothing}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06] space-y-1.5 md:col-span-2">
                  <div className="text-[11px] font-mono text-indigo-400 uppercase">
                    Overall Appearance & Physiology
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedChar.appearance}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06] space-y-1.5 md:col-span-2">
                  <div className="text-[11px] font-mono text-indigo-400 uppercase">
                    Psychological Profile & Personality
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedChar.personality}
                  </p>
                </div>
              </div>

              {/* Character Relationships Matrix */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <HeartHandshake className="h-3.5 w-3.5" />
                  <span>Inter-Character Relationship Matrix</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedChar.relationships.map((rel, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{rel.targetCharacterName}</span>
                        <span className="text-[11px] font-mono text-amber-300">{rel.relationType}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {rel.dynamicDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voice Casting & Sample Line */}
              <div className="p-4 rounded-xl border border-white/10 bg-indigo-950/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-300 flex items-center gap-1.5">
                    <Mic2 className="h-3.5 w-3.5" />
                    <span>VOICE CASTING LINK: {selectedChar.voiceActorArchetype}</span>
                  </span>
                  <span className="text-[11px] text-slate-400">{selectedChar.vocalTone}</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.08] text-xs text-amber-200 font-medium italic">
                  "{selectedChar.sampleLine}"
                </div>
              </div>
            </div>
          ) : (
            /* Edit / Add Form */
            <form onSubmit={isAddingNew ? handleAddNewSubmit : handleSaveEdit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="font-display text-lg font-bold text-white">
                  {isAddingNew ? 'Create New Character Profile' : `Edit ${formData.name}`}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Character Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Japanese Title / Kanji</label>
                  <input
                    type="text"
                    value={formData.japaneseTitle || ''}
                    onChange={(e) => setFormData({ ...formData, japaneseTitle: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Age</label>
                  <input
                    type="text"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  >
                    <option value="Protagonist">Protagonist</option>
                    <option value="Antagonist">Antagonist</option>
                    <option value="Deuteragonist">Deuteragonist</option>
                    <option value="Supporting">Supporting</option>
                    <option value="Mentor">Mentor</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-400 mb-1">Hairstyle</label>
                  <input
                    type="text"
                    value={formData.hairstyle}
                    onChange={(e) => setFormData({ ...formData, hairstyle: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-400 mb-1">Eye Characteristics</label>
                  <input
                    type="text"
                    value={formData.eyeCharacteristics}
                    onChange={(e) => setFormData({ ...formData, eyeCharacteristics: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-400 mb-1">Clothing & Signature Outfit</label>
                  <input
                    type="text"
                    value={formData.clothing}
                    onChange={(e) => setFormData({ ...formData, clothing: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-400 mb-1">Appearance Description</label>
                  <textarea
                    rows={2}
                    value={formData.appearance}
                    onChange={(e) => setFormData({ ...formData, appearance: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-400 mb-1">Personality</label>
                  <textarea
                    rows={2}
                    value={formData.personality}
                    onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-500"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>Save Profile</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
