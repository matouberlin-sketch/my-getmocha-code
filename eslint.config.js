import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

const tsconfigRootDir = new URL(".", import.meta.url).pathname;

export default tseslint.config(
  { ignores: ["dist", "./worker-configuration.d.ts", "artifacts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    files: ["src/web/**/*.{ts,tsx}", "src/web/**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        tsconfigRootDir,
      },
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-router",
              message: "Use react-router-dom in this web app.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/worker/**/*.{ts,tsx}", "playwright.config.ts", "vitest.config.ts"],
    extends: [...tseslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.worker.json", "./tsconfig.node.json"],
        tsconfigRootDir,
      },
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["src/**/*.{test,spec}.{ts,tsx}", "src/e2e/**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.worker.json", "./tsconfig.node.json"],
        tsconfigRootDir,
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
);
