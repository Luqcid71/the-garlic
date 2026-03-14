import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter({
      // default options are usually fine
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
	paths: {
      base: '/the-garlic',  // must match your repo name exactly
    },
  },
};


export default config;
