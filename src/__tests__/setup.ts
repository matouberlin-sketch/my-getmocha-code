import "@testing-library/jest-dom/vitest";

// Stub matchMedia for theme detection in tests
type MatchMediaListener = (this: MediaQueryList, ev: MediaQueryListEvent) => unknown;

declare global {
  interface Window {
    matchMedia(query: string): MediaQueryList;
  }
}

if (typeof window !== "undefined" && !window.matchMedia) {
  const mediaQueryList: MediaQueryList = {
    matches: false,
    media: "(prefers-color-scheme: light)",
    onchange: null,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    addListener: (() => undefined) as unknown as MatchMediaListener,
    removeListener: (() => undefined) as unknown as MatchMediaListener,
    dispatchEvent: () => false,
  };

  window.matchMedia = () => mediaQueryList;
}
