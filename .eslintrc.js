// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: ['html'],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
		'eqeqeq': 0,
		"spaced-comment": 0,
		"indent": ["error", 4, { "SwitchCase": 1 }],
        // allow async-await
        'generator-star-spacing': 0,
		"no-dupe-args": 2,//函数参数不能重复
		"no-duplicate-case": 2,//switch中的case标签不能重复
		"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
		"no-inline-comments": 0,//禁止行内备注
		"no-mixed-spaces-and-tabs": 2,//禁止混用tab和空格
		"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
		"no-use-before-define": 2,//未定义前不能使用
		"no-var": 0,//禁用var，用let和const代替
		"no-tabs": 0,//不允许使用制表符字符，包括在注释中
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
    'globals': {
        '_': true,
        '$': true,
        'wx': true,
        '$store': true,
        '$mutual': true,
        'iosLoadUrl': true,
    }
}
