module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: [
        "simple-import-sort",
        "unused-imports",
        "react-refresh",
        "mui-path-imports",
    ],
    rules: {
        "mui-path-imports/mui-path-imports": "error",
        "react-refresh/only-export-components": "warn",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unused-imports/no-unused-imports": "error",
    },
};
