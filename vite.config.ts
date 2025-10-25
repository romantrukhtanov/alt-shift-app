import path from 'node:path';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import fonts from 'unplugin-fonts/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  console.log(env.VITE_PORT);

  const API_URL = env.VITE_API_URL || '/api';
  const PORT = Number(env.VITE_PORT) || 5173;

  return {
    base: '/',
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [
      react(),
      tsconfigPaths(),
      svgr({
        svgrOptions: {
          icon: true,
          titleProp: true,
          ref: true,
          svgo: true,
          expandProps: 'start',
          svgProps: {
            className: '{props.className ? `${props.className} svgIcon` : `svgIcon`}',
          },
          svgoConfig: {
            plugins: ['prefixIds'],
          },
        },
      }),
      fonts({
        custom: {
          families: [
            {
              name: 'FixelText',
              local: 'FixelText',
              src: './src/shared/assets/fonts/FixelText/*.woff2',
            },
            {
              name: 'FixelDisplay',
              local: 'FixelDisplay',
              src: './src/shared/assets/fonts/FixelDisplay/*.woff2',
            },
          ],
          display: 'swap',
          preload: true,
          injectTo: 'head-prepend',
        },
      }),
    ],

    css: {
      modules: {
        generateScopedName: isDev ? '[name]_[local]_[hash:base64:5]' : undefined,
      },
    },

    build: {
      outDir: 'dist',
      sourcemap: isDev,
      minify: isProd ? 'esbuild' : false,
      chunkSizeWarningLimit: 700,

      rollupOptions: {
        output: {
          entryFileNames: 'assets/scripts/[name]-[hash].js',
          chunkFileNames: 'assets/scripts/[name]-[hash].js',
          assetFileNames: assetInfo => {
            const names = assetInfo.names;
            const name = (names && names[0]) || '';

            if (/\.(woff2?|ttf|otf|eot)$/i.test(name)) {
              return 'assets/fonts/[name]-[hash][extname]';
            }

            if (/\.(png|jpe?g|svg|gif|webp)$/i.test(name)) {
              return 'assets/images/[name]-[hash][extname]';
            }

            if (/\.css$/i.test(name)) {
              return 'assets/styles/[name]-[hash][extname]';
            }

            return 'assets/[name]-[hash][extname]';
          },
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom'],
    },

    preview: {
      port: 4173,
      open: true,
    },

    server: {
      port: PORT,
      open: true,
      cors: true,
      host: true,
      proxy: {
        [API_URL]: {
          target: env.VITE_API_PROXY || 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
