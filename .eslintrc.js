module.exports = {
    "overrides": [
        {
            "files": [
                "**/*.test.js",
                "**/*.test.jsx"
            ],
            "env": {
                "jest": true
            }
        }
    ],
    "env": {
        "browser": true,
        "node": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:security/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "security"
    ],
    "parser": "babel-eslint",
    "rules": {
    }
};
