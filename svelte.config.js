import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: 'build',
      assets: 'build',
      precompress: false,
      strict: true
    }),

    alias: {
      $assets: path.resolve('./src/lib/assets'),
      $components: path.resolve('./src/lib/components'),
      $images: path.resolve('./src/lib/assets/images'),
      $lib: path.resolve('./src/lib'),
    },

    paths: {
      // base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
      base: process.argv.includes('dev') ? '' : '/yogacubogdan.com'
    }
  }
};

export default config;
