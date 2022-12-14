module.exports = { // eslint-disable-line
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
      
    ],
 "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
    
    ],
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    }
}
