import { resolve } from 'node:path';

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'features.html'),
        templates: resolve(__dirname, 'templates.html'),
        howItWorks: resolve(__dirname, 'how-it-works.html'),
        about: resolve(__dirname, 'about.html'),
        download: resolve(__dirname, 'download.html'),
      },
    },
  },
};
