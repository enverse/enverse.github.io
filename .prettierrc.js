module.exports = {
  printWidth: 120,
  trailingComma: 'none',
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' }
    }
  ]
};
