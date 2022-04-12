module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-alert": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-console": "off",
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
  plugins: ["jest"],
};
