import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import bundleScss from 'rollup-plugin-bundle-scss';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    bundleScss({ exclusive: false }),
    postcss({ modules: true }),
    url(),
    svgr(),
    babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'],
        'node_modules/react-parallax/dist/index.js': ['Parallax', 'Background'],
        'node_modules/react-scroll-parallax/cjs/index.js': [
          'ParallaxProvider',
          'Parallax'
        ]
      }
    })
  ]
};
