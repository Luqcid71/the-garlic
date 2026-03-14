import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter(),
	paths: {
      base: '/the-garlic',  // must match your repo name exactly
    },
  },
};


export default config;
