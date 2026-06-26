export const T = {
  light: {
    bg:      "#fff8fb",
    bgAlt:   "#ffeef5",
    card:    "#ffffff",
    border:  "#fad0e0",
    text:    "#3a1025",
    muted:   "#b0607a",
    accent:  "#e05585",
    accent2: "#c47ed8",
    heading: "#1a0814",
    navBg:   "rgba(255,248,251,0.92)",
  },
  dark: {
    bg:      "#1a0a14",
    bgAlt:   "#140810",
    card:    "#261018",
    border:  "#3d1a28",
    text:    "#f0d0dd",
    muted:   "#9a7080",
    accent:  "#f4a7b9",
    accent2: "#c4a0d8",
    heading: "#fde8f0",
    navBg:   "rgba(26,10,20,0.88)",
  },
};

export const useT = (dark) => dark ? T.dark : T.light;
