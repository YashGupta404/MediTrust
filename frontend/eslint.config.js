import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  // Base JS rules
  js.configs.recommended,

  // Custom configuration for React projects
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
    },
    rules: {
      // Common React/JS rules
      "react/react-in-jsx-scope": "off", // not needed for React 17+
      "no-unused-vars": "warn",          // show warning, not error
      "no-undef": "warn",                // show warning, not error
      "react/prop-types": "off",         // ignore prop-types for now
      "react/jsx-uses-react": "off",     // avoid unused React import rule
      "react/jsx-uses-vars": "warn",     // prevent unused component warnings
      "no-console": "off",               // allow console.log for debugging
    },
    settings: {
      react: {
        version: "detect", // auto-detect React version
      },
    },
  },
];
