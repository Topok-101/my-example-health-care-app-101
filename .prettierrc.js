module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  tabWidth: 2,
  Semicolons: true,

  "importOrder": ["^models/(.*)$", "^types/(.*)$", "^view-models", "^store", "^hooks", "^components", "^features", "^@react-navigation/(.*)$", "^configs/(.*)$", "^navigations/(.*)$", "^services/(.*)$", "^helper", "^assets/(.*)$", "constants", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}
