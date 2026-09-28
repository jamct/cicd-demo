// ESLint-Konfiguration ("Flat Config", ab ESLint 9 der Standard).
// Wird nur vom optionalen Workflow .github/workflows/lint.yml gebraucht.
// Lokal prüfen (im Ordner app/):
//   npm install --no-save eslint@9 @eslint/js@9
//   npx eslint .
const js = require("@eslint/js");

module.exports = [
  // Die empfohlenen Grundregeln: findet z. B. Tippfehler in Variablennamen,
  // unbenutzte Variablen oder doppelte Schlüssel in Objekten.
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      // CommonJS = require()/module.exports, so wie in server.js.
      // ESLint kennt damit automatisch require, module und exports.
      sourceType: "commonjs",
      // Globale Variablen, die Node.js mitbringt. Ohne diese Liste meldet
      // die Regel "no-undef" z. B. "process is not defined".
      globals: {
        process: "readonly",
        console: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      // Eigene Regeln kommen hier hinein, z. B.:
      // "no-console": "warn",
    },
  },
];
