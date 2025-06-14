import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    plugins: {
      "unused-imports": unusedImports,
      import: importPlugin,
      jest: jestPlugin,
    },
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "prettier", "plugin:jest/recommended"],
    rules: {
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "no-undef": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
      "unused-imports/no-unused-imports": "error",
      "no-trailing-spaces": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "warn",
      "no-const-assign": "error",
      "no-unused-vars": "error",
      semi: ["error"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": "error",
    },
  }),
];

export default eslintConfig;
