import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: { DEFAULT: '#4050B5', light: '#4959BF', dark: '#3B4AA9' },
      important: { DEFAULT: '#CE5457' },
      warning: { DEFAULT: '#FFC05B' },
      safe: { DEFAULT: '#00C9A7' },
      input: { DEFAULT: '#292929', light: '#333333', dark: '#232323' },
      link: '#0086D1',
      text: { DEFAULT: '#FFFFFF', light: '#FFFFFF', secondary: '#828387' },
      back: { DEFAULT: '#292929', gray: '#141517', light: '#18191B', deep: '#0D0E10' },
      wheat: { DEFAULT: '#F0D39C' },
    },
  },
  shortcuts: [
    ['bg-base', 'bg-back'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
