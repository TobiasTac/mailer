import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } }, // Garante suporte a variáveis do Node (process, console, etc)
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off", // Desativa a do JS puro
      "@typescript-eslint/no-unused-vars": "warn", // Ativa a do TS
      "@typescript-eslint/no-explicit-any": "warn", // Útil para Lambda Handlers no início
    }
  }
];
