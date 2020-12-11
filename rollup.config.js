import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'

const terserConfig = {}

export default {
  input: 'src/main.js', // our source file
  output: [
    {
      file: pkg.main,
      format: 'cjs'
      // sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es', // the preferred format
      sourcemap: true
    },
    {
      file: pkg.browser,
      format: 'iife',
      name: 'hnfavs' // the global which can be used in a browser
    }
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    terser(terserConfig) // minifies generated bundles
  ]
}
