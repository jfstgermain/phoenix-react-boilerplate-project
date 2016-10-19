module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
    },
    "rules": {
      "import/no-extraneous-dependencies": ["error", {
        "devDependencies": ["**/*.test.js", "**/*.spec.js", "**/webpack*.js"]
      }],
    }
};
