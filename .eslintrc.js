module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "env": {
      // "es6": true,
      "browser": true
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["**/*.test.js", "**/*.spec.js", "**/webpack*.js"]
    }],
  }
};
