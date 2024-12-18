// Animation constants
export const ANIMATION_CONFIG = {
  WORD_STAGGER: 0.12,
  WORD_DELAY: 0.04,
  SPRING_DAMPING: 12,
  SPRING_STIFFNESS: 100,
  FADE_DURATION: 0.6
} as const;

// Loading animation words
export const LOADING_WORDS = [
  { text: 'Time', color: 'text-yellow-400' },
  { text: 'Magic', color: 'text-green-400' },
  { text: 'AGI', color: 'text-cyan-400' },
  { text: 'Future', color: 'text-purple-400' }
] as const;

// Text effects
export const GLOW_EFFECTS = {
  TEXT_SHADOW: `
    0 0 20px rgba(255,255,255,0.4),
    0 0 40px rgba(255,255,255,0.2),
    0 0 60px rgba(255,255,255,0.1)
  `,
  GRADIENT: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 100%)',
  DROP_SHADOW: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
} as const;