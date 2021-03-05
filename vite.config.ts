import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);

  return {
    base: env.VITE_BASE_URL,
    plugins: [vue(), legacy()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      open: true,
    },
    build: {
      sourcemap: env.VITE_SOURCE_MAP === 'on',
    },
  };
});
