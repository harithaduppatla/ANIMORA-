import { MovieProject, CharacterProfile, Scene, PipelineStage, StoryAnalysisData } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_anime_cinematic_1790656570791.jpg';
export const PRODUCTION_SHOT_IMAGE = '/src/assets/images/anime_production_shot_1790656584515.jpg';
export const KAEL_PORTRAIT = '/src/assets/images/character_kael_portrait_1790656598891.jpg';
export const LYRA_PORTRAIT = '/src/assets/images/character_lyra_portrait_1790656610557.jpg';

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 1,
    name: 'Story Input',
    category: 'Narrative',
    agentRole: 'Ingestion Agent',
    description: 'Accepts raw manuscripts, light novel drafts, screenplays, or synopsis docs across multiple file formats.',
    iconName: 'FileText'
  },
  {
    id: 2,
    name: 'Story Understanding',
    category: 'Narrative',
    agentRole: 'Dramaturgy Agent',
    description: 'Hierarchically deconstructs narrative arcs, core themes, emotional tension curves, and philosophical undertones.',
    iconName: 'Brain'
  },
  {
    id: 3,
    name: 'Character Creation',
    category: 'Narrative',
    agentRole: 'Casting & Persona Agent',
    description: 'Synthesizes rigorous character model sheets, psychological traits, distinctive silhouettes, and dynamic relationship matrices.',
    iconName: 'Users'
  },
  {
    id: 4,
    name: 'World Building',
    category: 'Narrative',
    agentRole: 'Architect Agent',
    description: 'Establishes visual lore, geographical scale, architectural rules, technological level, and environmental weather systems.',
    iconName: 'Globe'
  },
  {
    id: 5,
    name: 'Scene Planning',
    category: 'Narrative',
    agentRole: 'Story Editor Agent',
    description: 'Divides the plot into narrative chapters and dramatic scene units with explicit timecodes, lighting keys, and moods.',
    iconName: 'Film'
  },
  {
    id: 6,
    name: 'Shot Planning',
    category: 'Visuals',
    agentRole: 'Cinematographer Agent',
    description: 'Choreographs camera angles, Dutch tilts, dynamic focal lengths, optical lens flares, and blocking geometry per shot.',
    iconName: 'Camera'
  },
  {
    id: 7,
    name: 'Visual Generation',
    category: 'Visuals',
    agentRole: 'Key Frame Art Agent',
    description: 'Renders high-fidelity key animation frames and background plates maintaining the selected anime studio art style.',
    iconName: 'Sparkles'
  },
  {
    id: 8,
    name: 'Voice Generation',
    category: 'Sound',
    agentRole: 'Voice Director Agent',
    description: 'Assigns specialized synthetic anime voice actor archetypes with emotive breathing, cadence, and pitch control.',
    iconName: 'Mic'
  },
  {
    id: 9,
    name: 'Dubbing',
    category: 'Sound',
    agentRole: 'Acoustic & Dub Agent',
    description: 'Executes frame-accurate phonetic lip-sync and localization across Japanese, English, French, Spanish, and German.',
    iconName: 'Languages'
  },
  {
    id: 10,
    name: 'Consistency Checking',
    category: 'Visuals',
    agentRole: 'Continuity Supervisor Agent',
    description: 'Verifies costume states, scars, facial geometry seeds, lighting vectors, and environmental physics across every cut.',
    iconName: 'ShieldCheck'
  },
  {
    id: 11,
    name: 'Editing',
    category: 'Assembly',
    agentRole: 'Master Editor Agent',
    description: 'Assembles cutaways, pacing transitions, motion tweening, atmospheric color timing, and spatial sound mastering.',
    iconName: 'Sliders'
  },
  {
    id: 12,
    name: 'Final Movie',
    category: 'Assembly',
    agentRole: 'Mastering Agent',
    description: 'Renders the pristine theatrical master package with multi-track audio stems, chapter metadata, and 4K HDR export.',
    iconName: 'Tv'
  }
];

export const INITIAL_CHARACTERS: CharacterProfile[] = [
  {
    id: 'char_kael',
    movieId: 'mov_chrono_01',
    name: 'Kaelen Vane',
    japaneseTitle: 'カエレン・ヴェイン',
    age: 19,
    role: 'Protagonist',
    appearance: 'Lean athletic build, striking silver hair swept back, glowing amber eyes that illuminate when manipulating temporal threads. Distinctive temporal scar along left wrist.',
    personality: 'Pragmatic and fiercely loyal, burdened by the echoes of alternate timelines. Speaks with quiet conviction, masking deep survivor guilt.',
    hairstyle: 'Layered windswept silver locks, shoulder-length, tied with a dark leather cord in combat.',
    eyeCharacteristics: 'Sharp iridescent amber irises with faint concentric clockwork rings visible under intense emotion.',
    clothing: 'Dark charcoal traveling duster lined with bronze chronometer gears, high-collar tunic, reinforced leather combat greaves, and brass pocket chronometer.',
    relationships: [
      {
        targetCharacterName: 'Lyra Solis',
        relationType: 'Reluctant Ally / Bound Fate',
        dynamicDescription: 'Kaelen remembers saving her in 3 collapsed timelines; she is unaware of their past attempts, creating deep emotional dissonance.'
      },
      {
        targetCharacterName: 'Grand Inquisitor Zephir',
        relationType: 'Sworn Nemesis',
        dynamicDescription: 'Zephir hunts Kaelen for the stolen Chrono-Core, viewing temporal manipulation as heretical entropy.'
      }
    ],
    voiceActorArchetype: 'Quiet Determination (Bishōnen / Heroic Tenor)',
    vocalTone: 'Resonant, reflective, restrained energy with sudden explosive resolve in climax.',
    sampleLine: 'Every tick of this watch is a promise I broke in another life. Not this time.',
    avatarUrl: KAEL_PORTRAIT,
    consistencyLock: true,
    colorTheme: '#f59e0b'
  },
  {
    id: 'char_lyra',
    movieId: 'mov_chrono_01',
    name: 'Lyra Solis',
    japaneseTitle: 'ライラ・ソリス',
    age: 18,
    role: 'Deuteragonist',
    appearance: 'Slender frame with vibrant cyan-tinted hair, deep indigo eyes that reflect starlight, cybernetic audio relay on right ear, confident posture.',
    personality: 'Brilliant stellar engineer, curious, uncompromisingly optimistic, driven to decode the lost sky engines.',
    hairstyle: 'Short asymmetric bob with neon-cyan highlights that glow in low light, parted sharply to the left.',
    eyeCharacteristics: 'Luminous violet-blue with subtle hexagonal iris reflex reflections.',
    clothing: 'Aero-mechanic cropped pilot bomber jacket with glowing cyan seams, utility harness, insulated dark canvas trousers, brass multi-tool gauntlet.',
    relationships: [
      {
        targetCharacterName: 'Kaelen Vane',
        relationType: 'Trusted Navigator',
        dynamicDescription: 'Initially suspicious of his unexplained foresight, she quickly realizes his instincts defy standard physics.'
      },
      {
        targetCharacterName: 'Aria (Drone Companion)',
        relationType: 'Autonomous Creation',
        dynamicDescription: 'Lyra built Aria from scrapped chronometer parts; treats the drone like a snarky younger sibling.'
      }
    ],
    voiceActorArchetype: 'Bright Intellectual (Determined Mezzo-Soprano)',
    vocalTone: 'Crisp, articulate, warm curiosity with rapid-fire technical observations.',
    sampleLine: 'If your timeline already collapsed, Kael, then we just need to build a better engine for this one.',
    avatarUrl: LYRA_PORTRAIT,
    consistencyLock: true,
    colorTheme: '#06b6d4'
  },
  {
    id: 'char_zephir',
    movieId: 'mov_chrono_01',
    name: 'Grand Inquisitor Zephir',
    japaneseTitle: '大審問官ゼフィール',
    age: 44,
    role: 'Antagonist',
    appearance: 'Tall imposing figure clad in obsidian armor etched with golden astrological seals, flowing ivory cape, stern scarred jawline.',
    personality: 'Dogmatic zealot convinced that temporal stillness is the only salvation for a decaying cosmos.',
    hairstyle: 'Strictly combed dark hair with silvering temples, razor-sharp styling.',
    eyeCharacteristics: 'Piercing steely gray eyes that never blink during interrogation.',
    clothing: 'Ornate ceremonial plate armor, high velvet collar, long ceremonial temporal halberd.',
    relationships: [
      {
        targetCharacterName: 'Kaelen Vane',
        relationType: 'Heretic Bounty',
        dynamicDescription: 'Views Kaelen as a walking anomaly that threatens the universal ledger of causality.'
      }
    ],
    voiceActorArchetype: 'Authoritative Bass (Imperial Commander)',
    vocalTone: 'Cold, measured, chillingly composed, echoing with unshakeable conviction.',
    sampleLine: 'You fracture reality to save a handful of tears. Order will reclaim what you stole.',
    avatarUrl: PRODUCTION_SHOT_IMAGE,
    consistencyLock: true,
    colorTheme: '#ef4444'
  }
];

export const INITIAL_SCENES: Scene[] = [
  {
    id: 'scn_01',
    movieId: 'mov_chrono_01',
    chapterNumber: 1,
    sceneNumber: 1,
    title: 'The Bell of the Shattered Belltower',
    location: 'Upper Spires of Neo-Elysium',
    timeOfDay: 'Sunset / Twilight',
    mood: 'Melancholic, Suspenseful',
    weather: 'Light amber mist with drifting cherry blossom nanites',
    description: 'Kaelen stands upon the precarious ledge of the ruined clocktower, watching the amber sky fracture as temporal anomalies pulse over the neon metropolis below.',
    charactersPresent: ['Kaelen Vane'],
    keyVisualUrl: HERO_IMAGE,
    shots: [
      {
        id: 'shot_01_01',
        shotNumber: 1,
        cameraAngle: 'Extreme Wide Shot',
        movement: 'Slow crane descent from celestial clouds to church spire',
        focalLength: '24mm Anamorphic',
        lighting: 'Deep golden twilight rim lighting with indigo shadow fills',
        actionPrompt: 'Sprawling anime cityscape at dusk, luminous spirit lanterns floating above skyscrapers, single figure silhouetted on gothic spire ledge.',
        dialogueSnippet: 'The bell chimed twelve times... but the shadow of the sun didn’t move.',
        speaker: 'Kaelen Vane',
        durationSeconds: 4.5,
        status: 'rendered'
      },
      {
        id: 'shot_01_02',
        shotNumber: 2,
        cameraAngle: 'Close-Up Tracking',
        movement: 'Steadicam tracking Kaelen’s gloved hand holding the pocket chronometer',
        focalLength: '85mm Prime (f/1.4)',
        lighting: 'Amber specular reflections glinting off brass gears',
        actionPrompt: 'Close up of intricate mechanical clockwork reversing direction, golden temporal particles floating in air.',
        durationSeconds: 3.0,
        status: 'composed'
      }
    ]
  },
  {
    id: 'scn_02',
    movieId: 'mov_chrono_01',
    chapterNumber: 1,
    sceneNumber: 2,
    title: 'Sanctuary in the Cyber-Shrine',
    location: 'Hidden Undergrowth of Sub-Sector 7 Shrine',
    timeOfDay: 'Dusk',
    mood: 'Tense, Revelation',
    weather: 'Overcast with volumetric god rays through ancient trees',
    description: 'Lyra calibrates the ancient shrine generator while Kaelen arrives through a temporal gate. They stand back-to-back as imperial pursuit drones circle overhead.',
    charactersPresent: ['Kaelen Vane', 'Lyra Solis'],
    keyVisualUrl: PRODUCTION_SHOT_IMAGE,
    shots: [
      {
        id: 'shot_02_01',
        shotNumber: 1,
        cameraAngle: 'Medium Two-Shot',
        movement: 'Slow 180-degree orbit around the two protagonists',
        focalLength: '50mm Cinema',
        lighting: 'Volumetric light shafts cutting through twilight canopy, cyan shrine glow',
        actionPrompt: 'Two anime protagonists standing back-to-back in an overgrown cybernetic Torii gate shrine, glowing cherry petals drifting in slow motion.',
        dialogueSnippet: 'You are late, chronomancer. By three seconds.',
        speaker: 'Lyra Solis',
        durationSeconds: 5.2,
        status: 'rendered'
      },
      {
        id: 'shot_02_02',
        shotNumber: 2,
        cameraAngle: 'Over-the-Shoulder',
        movement: 'Snap rack focus from Lyra’s face to Kaelen’s drawn chronometer blade',
        focalLength: '70mm Cine',
        lighting: 'Contrasting cool cyan vs warm amber edge rim',
        actionPrompt: 'Kaelen looks toward the canopy as searchlights pierce the bamboo branches.',
        dialogueSnippet: 'Three seconds was the difference between life and obliteration in sector four.',
        speaker: 'Kaelen Vane',
        durationSeconds: 3.8,
        status: 'planned'
      }
    ]
  }
];

export const INITIAL_MOVIES: MovieProject[] = [
  {
    id: 'mov_chrono_01',
    title: 'The Chrono-Archon’s Vow',
    tagline: 'When time fractures, the heart keeps the count.',
    synopsis: 'In a vertical metropolis where time is mined as a combustible resource, a rogue chronomancer and a sky-engine architect must navigate 12 collapsed timelines to stop the Grand Inquisitor from freezing the universe in eternal stillness.',
    coverImage: HERO_IMAGE,
    animeStyle: 'makoto_shinkai',
    visualFormat: 'feature_film',
    originalLanguage: 'Japanese (日本語)',
    targetLanguages: ['English', 'Japanese', 'French', 'Spanish'],
    status: 'production',
    progress: 68,
    activeStage: 'Shot Planning & Key Animation',
    charactersCount: 7,
    scenesCount: 24,
    shotsCount: 148,
    estimatedDuration: '88 min',
    createdAt: '2026-09-15',
    updatedAt: '2026-09-28'
  },
  {
    id: 'mov_cyber_shrine',
    title: 'Petals of the Cyber-Shrine',
    tagline: 'Where ancient spirits awake in fiber optics.',
    synopsis: 'A cyber-shrine maiden uncovers a forgotten artificial intelligence living inside the city’s oldest Torii gate, sparking a war between corporate developers and guardian deities.',
    coverImage: PRODUCTION_SHOT_IMAGE,
    animeStyle: 'cyberpunk_neo_tokyo',
    visualFormat: 'pilot_episode',
    originalLanguage: 'Japanese (日本語)',
    targetLanguages: ['English', 'Japanese', 'Korean'],
    status: 'story_analyzed',
    progress: 35,
    activeStage: 'Character Model Sheet Lock',
    charactersCount: 4,
    scenesCount: 12,
    shotsCount: 64,
    estimatedDuration: '24 min',
    createdAt: '2026-09-20',
    updatedAt: '2026-09-27'
  }
];

export const PRESET_STORIES = [
  {
    id: 'story_chrono',
    title: 'The Chrono-Archon’s Vow',
    animeStyle: 'makoto_shinkai' as const,
    visualFormat: 'feature_film' as const,
    originalLanguage: 'Japanese (日本語)',
    targetLanguages: ['English', 'Japanese', 'French', 'Spanish'],
    synopsis: 'A high-concept romantic time-slip sci-fi epic set against breathtaking twilight cityscapes.',
    text: `Chapter 1: The Twelve O'Clock Bell
The upper towers of Neo-Elysium pierce through perpetual purple cloudbanks. At the pinnacle of the St. Aethelgard Clocktower stands Kaelen Vane, nineteen years old, his silver hair whipped by high-altitude gusts. In his left hand, an intricate brass pocket chronometer ticks backward.
Down in the lower districts, Lyra Solis adjusts her cyan goggles, calibrating the lost Torii gate terminal. She doesn't know Kaelen yet—or rather, she doesn't remember him from the three erased realities where they died together.

Chapter 2: The Inquisitor's Descent
Grand Inquisitor Zephir leads the Chrono-Guard through the cloud strata on obsidian skyships. Zephir's mandate is absolute: isolate the core anomaly before temporal decay infects the Prime Meridian. As the temple bells toll, Kaelen drops through the fractured time-rift, landing directly before Lyra just as Zephir's halberdiers breach the ancient bamboo sanctuary.

Chapter 3: The Binding Accord
"You're three seconds late," Lyra mutters, her cyan-lit wrench ready to deflect plasma bolts.
"I spent those three seconds making sure this timeline wouldn't burn like the last," Kaelen replies. Together, their weapons clash against Zephir's temporal wardens as luminous spirit petals billow into the twilight sky.`
  },
  {
    id: 'story_blade_echo',
    title: 'Blade of the Obsidian Eclipse',
    animeStyle: 'dark_fantasy_mappa' as const,
    visualFormat: 'pilot_episode' as const,
    originalLanguage: 'Japanese (日本語)',
    targetLanguages: ['English', 'Japanese', 'German'],
    synopsis: 'Gritty dark fantasy action with visceral choreography and demon bloodlines.',
    text: `Act I: The Ashen Village
In the scorched provinces of the Kagetsu clan, rain falls like black ink. Rin, a cursed swordsman with an ember-veined katana, wanders among the petrified remains of his ancestral dojo. A shadowy demon known as the Void Weaver stalks the perimeter, feasting on lingering memories.

Act II: The Iron Shrine
Rin meets Saki, a blind shrine maiden who can hear the heartbeat of the land. Saki reveals that the eclipse due at midsummer will shatter the barrier between realms unless the five obsidian shards are reunited.

Act III: Severing the Void
Surrounded in the bamboo forest during a lunar storm, Rin unleashes the forbidden flame technique, his blade cutting through reality itself to protect Saki.`
  },
  {
    id: 'story_stellar_drift',
    title: 'Starlight Whispers on Orbit-9',
    animeStyle: 'ghibli_whimsical' as const,
    visualFormat: 'short_film' as const,
    originalLanguage: 'Japanese (日本語)',
    targetLanguages: ['English', 'Japanese'],
    synopsis: 'A heartwarming, lyrical retro-futuristic journey across floating greenhouse asteroids.',
    text: `Act 1: The Floating Greenhouses
Ten-year-old Mei tends to the luminescent pumpkin vines on Habitat-7. Her trusty companion is a copper automaton named Poko, who runs on steam and old music box tunes.

Act 2: The Cosmic Migration
Every fifty solar cycles, the Great Star Whales glide past the orbital ring. When an injured juvenile calf separates from the pod, Mei and Poko rig a pedal-powered skiff with botanical sails to guide it home.`
  }
];

export const MOCK_ANALYSIS_RESULT: StoryAnalysisData = {
  logline: 'When a broken chronometer links a guilt-ridden time-traveler to an oblivious sky-engineer, they must navigate 12 collapsed timelines before an imperial zealot freezes the cosmos in eternal stillness.',
  overview: 'A rich multi-layered cinematic narrative blending emotional character resonance with hard mechanical temporal logic. The story operates on two parallel narrative axes: the physical chase across the vertical strata of Neo-Elysium, and the psychological burden of unshared memories between the two leads.',
  themes: [
    'Survivor Guilt vs. Hope',
    'The Cost of Rewriting Destiny',
    'Human Connection Across Parallel Realities',
    'Order vs. Creative Entropy'
  ],
  emotionalArc: 'Begins with melancholic isolation and cynicism, shifts to reluctant camaraderie and thrilling synchronized survival, peaks at a tragic sacrifice dilemma, and concludes in defiant transcendence.',
  worldBuilding: {
    lore: 'Four centuries ago, the Great Calibration harnessed Chrono-Particles from the atmosphere to power floating citadels. Time has become a literal fuel resource, strictly metered by the Grand Inquisitor’s church.',
    setting: 'Neo-Elysium: A vertical megacity rising from mist-shrouded ruins into high-altitude sunlit spires. Contrasts decaying sacred bamboo shrines with hyper-sleek obsidian skydocks.',
    magicOrTechSystem: 'Chronocasting: Specialized gear-driven catalysts allow users to freeze, rewind, or loop localized temporal bubbles for brief intervals at extreme physical stamina cost.',
    factionDynamics: 'The Holy Chrono-Inquisition (Autocratic state order) vs. The Free Gearwrights & Rogue Chronomancers (Underground resistance seeking natural time).'
  },
  hierarchicalTimeline: [
    {
      act: 'Act I (Exposition & Inciting Incident)',
      title: 'The Echoing Hour',
      description: 'Introduction of Kaelen atop the belltower, establishment of the temporal anomalies, and his arrival at the Sub-Sector 7 Cyber-Shrine.',
      chapters: ['Chapter 1: The Twelve O’Clock Bell', 'Chapter 2: The Inquisitor’s Descent']
    },
    {
      act: 'Act II (Rising Action & Complication)',
      title: 'The Mesh of Realities',
      description: 'Kaelen and Lyra escape the pursuit drones, discover the corrupted Chrono-Core, and uncover Zephir’s true objective.',
      chapters: ['Chapter 3: The Binding Accord', 'Chapter 4: The Whispering Ruins', 'Chapter 5: The Inverted Clock']
    },
    {
      act: 'Act III (Climax & Resolution)',
      title: 'The Final Strike of Twelve',
      description: 'A breathtaking confrontation on the Great Spire during the midsummer temporal eclipse, culminating in the reset of the Prime Meridian.',
      chapters: ['Chapter 6: The Eclipse Battle', 'Chapter 7: Dawn of the Unwritten Day']
    }
  ],
  detectedEvents: [
    {
      timecode: '00:03:15',
      event: 'Kaelen witnesses the 12th timeline collapse',
      impact: 'Establishes high stakes and the ticking clock for the current reality.'
    },
    {
      timecode: '00:14:40',
      event: 'First encounter with Lyra at the Sub-Sector 7 Torii gate',
      impact: 'Emotional anchor established; dynamic shift from solo survival to collaborative partnership.'
    },
    {
      timecode: '00:32:10',
      event: 'Zephir deploys the Temporal Stasis field',
      impact: 'Forces protagonists into the lower forgotten underground ruins.'
    },
    {
      timecode: '01:12:00',
      event: 'Lyra realizes Kaelen has saved her three times before',
      impact: 'Core dramatic catharsis and emotional resolution.'
    }
  ],
  continuityAnchors: [
    'Kaelen’s left wrist scar: Must remain visible in every timeline interaction.',
    'Lyra’s cyan pilot jacket: Retains scorch mark from Scene 2 through Scene 5.',
    'Chrono-Core lighting: Always emits 480nm cyan glow when active, amber when overloaded.',
    'Weather continuity: Neo-Elysium twilight mist maintains constant drift vector from west to east.'
  ],
  characterRoster: INITIAL_CHARACTERS,
  sceneDrafts: INITIAL_SCENES
};
