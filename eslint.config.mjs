import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("airbnb"),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.amd,
        ...globals.jest,
        __DEV__: true,
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false, // Disable the need for a Babel config file
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },

    rules: {
      "import/extensions": [
        "error",
        "always",
        {
          js: "never",
          jsx: "never",
        },
      ],
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx"],
        },
      ],
      "import/no-extraneous-dependencies": "off",
      "no-console": [
        "error",
        {
          allow: ["warn", "error", "info"],
        },
      ],
      "linebreak-style": "off",
      "import/prefer-default-export": "off",
    },
  },
];
