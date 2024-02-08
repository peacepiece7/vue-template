/* eslint-env node */
/**
 * @note TypeScript 컴파일러와 ESLint 간의 상호 작용을 개선하고, 코드 검사 및 정적 분석 도구
 * @link https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    // .prettierrc 설정을 덮어서 씁니다.
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: false,
        printWidth: 100,
        tabWidth: 2,
        singleQuote: false,
      },
    ],
  },
  // .html, .css는 lint parser를 따로 사용하지 않습니다.
  ignorePatterns: ["node_modules/", "dist/", "public/", "*.html", "*.css"],

  // import alias
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".js", ".vue"],
      },
    },
  },
}

/**
 * @note SAMPLE CODE
 * @see eslint-config-typescript {@link https://github.com/vuejs/eslint-config-typescript}f
 */
