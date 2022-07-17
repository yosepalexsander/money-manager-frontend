module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "plugin:import/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "eslint-plugin-simple-import-sort", "prettier"],
  rules: {
    "max-len": ["error", 120],
    "prefer-const": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: false, avoidEscape: true }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": 0,
    "import/no-unused-modules": 0,
    "react/display-name": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],
    "react/self-closing-comp": [
      1,
      {
        component: true,
        html: true,
      },
    ],
    "react-hooks/exhaustive-deps": ["error", { additionalHooks: "(useMemoOne)" }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
