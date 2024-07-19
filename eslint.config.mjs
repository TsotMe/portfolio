import withNuxt from './.nuxt/eslint.config.mjs'
import js from "@eslint/js";

export default withNuxt(
  js.configs.recommended

  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
)
