import 'vite';
declare module 'vite' {
  export function loadEnv(
    mode: string,
    root: string,
    prefix?: string
  ): CustomEnvVariables;

  export interface CustomEnvVariables {
    VITE_BASE_URL: string;
    VITE_MOCK?: 'on' | 'off';
    VITE_SOURCE_MAP?: 'on' | 'off';
    VITE_GZIP?: 'on' | 'off';
    VITE_BROTLI?: 'on' | 'off';
    // ... more custom here, must VITE_* !
  }
}
