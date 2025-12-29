export {};

declare global {
  interface Window {
    google: any;
  }
}

// En tu hook o en un archivo .d.ts global
declare global {
  interface Window {
    __googleScriptLoaded?: boolean;
  }
}
