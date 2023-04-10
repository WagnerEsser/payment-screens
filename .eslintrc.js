module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "prettier/prettier",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "@typescript-eslint/triple-slash-reference": "off",
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
