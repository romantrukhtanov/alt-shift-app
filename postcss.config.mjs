import path from 'node:path';
import postcssGlobalData from '@csstools/postcss-global-data';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNormalize from 'postcss-normalize';

const isProd = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    postcssGlobalData({
      files: [
        isProd && path.resolve('src/app/styles/variables.css'),
        path.resolve('src/app/styles/media.css'),
        path.resolve('src/app/styles/theme.css'),
      ].filter(Boolean),
    }),
    postcssImport(),
    postcssPresetEnv({
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
        'color-functional-notation': true,
        'logical-properties-and-values': true,
        'focus-visible-pseudo-class': true,
        'cascade-layers': true,
      },
      autoprefixer: { grid: true },
    }),
    postcssNormalize(),
  ],
};
