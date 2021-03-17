interface CustomEnvVariables {
  VITE_BASE_URL: string;
  VITE_HTTP_MOCK?: 'on' | 'off';
  VITE_SOURCE_MAP?: 'on' | 'off';
  VITE_GZIP?: 'on' | 'off';
  VITE_BROTLI?: 'on' | 'off';

  VITE_API_BASE_URL: string;
  // ... more here and start with 'VITE_'
}

// https://stackoverflow.com/questions/66039933/typescript-types-for-import-meta-env
interface ImportMetaEnv extends CustomEnvVariables {
  /**
   * ! DON'T USE ME
   */
  __: unknown;
}

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __VUE_DEVTOOLS_GLOBAL_HOOK__: any;
}
