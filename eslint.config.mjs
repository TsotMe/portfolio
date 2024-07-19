import withNuxt from './.nuxt/eslint.config.mjs'
import js from '@eslint/js'

export default withNuxt(
  js.configs.recommended,

  {
    files: ['**/*.js', '**/*.vue'],
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'always',
            component: 'always',
            img: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ]
    }
  }
)
