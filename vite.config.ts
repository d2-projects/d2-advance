import { defineConfig, loadEnv, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import windi from 'vite-plugin-windicss';
import compression from 'vite-plugin-compression';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  const env = (loadEnv(mode, __dirname) as unknown) as CustomEnvVariables;

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      vue(),
      windi(),
      mode === 'report' &&
        visualizer({
          filename: './dist/_report.html',
          open: mode === 'report',
        }),
      legacy(),
      env.VITE_GZIP === 'on' &&
        compression({
          algorithm: 'gzip',
          ext: '.gz',
        }),
      env.VITE_BROTLI === 'on' &&
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
        }),
    ].filter(Boolean) as Plugin[],
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
