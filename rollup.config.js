import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    // Plugin order is really important
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
    }),
    resolve(),
    commonjs(),
  ],
  preserveModules: true,
}
