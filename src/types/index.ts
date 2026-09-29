export type AnimeStyle = 
  | 'shonen_epic' 
  | 'makoto_shinkai' 
  | 'cyberpunk_neo_tokyo' 
  | 'dark_fantasy_mappa' 
  | 'ghibli_whimsical' 
  | 'retro_90s_cel';

export type VisualFormat = 
  | 'feature_film' 
  | 'short_film' 
  | 'pilot_episode' 
  | 'cinematic_teaser';

export type MovieStatus = 
  | 'draft' 
  | 'analyzing' 
  | 'story_analyzed' 
  | 'production' 
  | 'completed';

export interface CharacterRelationship {
  targetCharacterName: string;
  relationType: string;
  dynamicDescription: string;
}

export interface CharacterProfile {
  id: string;
  movieId: string;
  name: string;
  japaneseTitle?: string;
  age: number | string;
  role: 'Protagonist' | 'Antagonist' | 'Deuteragonist' | 'Supporting' | 'Mentor';
  appearance: string;
  personality: string;
  hairstyle: string;
  eyeCharacteristics: string;
  clothing: string;
  relationships: CharacterRelationship[];
  voiceActorArchetype: string;
  vocalTone: string;
  sampleLine: string;
  avatarUrl: string;
  consistencyLock: boolean;
  colorTheme: string;
}

export interface Shot {
  id: string;
  shotNumber: number;
  cameraAngle: string;
  movement: string;
  focalLength: string;
  lighting: string;
  actionPrompt: string;
  dialogueSnippet?: string;
  speaker?: string;
  durationSeconds: number;
  status: 'planned' | 'composed' | 'rendered';
}

export interface Scene {
  id: string;
  movieId: string;
  chapterNumber: number;
  sceneNumber: number;
  title: string;
  location: string;
  timeOfDay: string;
  mood: string;
  weather: string;
  description: string;
  charactersPresent: string[];
  shots: Shot[];
  keyVisualUrl?: string;
}

export interface MovieProject {
  id: string;
  title: string;
  tagline: string;
  synopsis: string;
  coverImage: string;
  animeStyle: AnimeStyle;
  visualFormat: VisualFormat;
  originalLanguage: string;
  targetLanguages: string[];
  status: MovieStatus;
  progress: number;
  activeStage: string;
  charactersCount: number;
  scenesCount: number;
  shotsCount: number;
  estimatedDuration: string;
  createdAt: string;
  updatedAt: string;
}

export interface PipelineStage {
  id: number;
  name: string;
  category: 'Narrative' | 'Visuals' | 'Sound' | 'Assembly';
  description: string;
  agentRole: string;
  iconName: string;
}

export interface StoryAnalysisData {
  logline: string;
  overview: string;
  themes: string[];
  emotionalArc: string;
  worldBuilding: {
    lore: string;
    setting: string;
    magicOrTechSystem: string;
    factionDynamics: string;
  };
  hierarchicalTimeline: Array<{
    act: string;
    title: string;
    description: string;
    chapters: string[];
  }>;
  detectedEvents: Array<{
    timecode: string;
    event: string;
    impact: string;
  }>;
  continuityAnchors: string[];
  characterRoster: CharacterProfile[];
  sceneDrafts: Scene[];
}

export type ActiveTab = 
  | 'dashboard' 
  | 'new_movie' 
  | 'my_movies' 
  | 'characters' 
  | 'scenes' 
  | 'voices' 
  | 'dubbing' 
  | 'movie_memory' 
  | 'consistency' 
  | 'settings';
