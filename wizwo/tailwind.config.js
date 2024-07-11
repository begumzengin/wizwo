const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'wizwo-black': '#292621',
        'wizwo-blue': '#7790ed',
        'wizwo-cream': '#f5ede2',
      },
    },
  },
  plugins: [],
};
