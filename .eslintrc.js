module.exports = {
    extends: ["airbnb-base", "prettier"],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    rules: {
        "no-console": 0,
        "import/prefer-default-export": 0,
        "prefer-template": 0,
    },
    // TODO Ошибка не примененной переменной.
    // erroConst:{
    //     "prefer-const": ["error", {
    //         "destructuring": "any",
    //         "ignoreReadBeforeAssign": false
    //     }]
    // }
};