module.exports = {
 env: {
  browser: true,
  es2020: true,
 },
 extends: [
  "prettier",
  "airbnb-base",
  "plugin:react/recommended",
  "plugin:promise/recommended",
  "plugin:jest/recommended",
 ],
 plugins: ["promise", "jest"],
 parserOptions: {
  ecmaVersion: 6,
  sourceType: "module",
 },
 rules: {},
};
