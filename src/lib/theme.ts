export const theme = {
  colors: {
    cream: '#FFF8F2',
    white: '#FFFFFF',
    pink: '#F6D3DD',
    pinkDeep: '#E8A9BC',
    peach: '#F5C79C',
    peachDeep: '#EFAE79',
    gold: '#C6972F',
    goldBright: '#E0B84B',
    ink: '#4A362F',
    inkSoft: '#7A6155',
  },
  fonts: {
    heading: 'var(--font-shippori)',
    body: 'var(--font-zen-maru)',
  },
  shadows: {
    default: '0 20px 50px -20px rgba(150, 100, 60, 0.35)',
  },
  borderRadius: {
    default: '16px',
    full: '9999px',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.6s ease',
  },
} as const;

export type Theme = typeof theme;