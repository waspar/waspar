# Waspar Web Tools

[![NPM version](http://img.shields.io/npm/v/waspar.svg?style=flat-square)](https://www.npmjs.com/package/waspar)
[![NPM downloads](http://img.shields.io/npm/dm/waspar.svg?style=flat-square)](https://www.npmjs.com/package/waspar)
[![Build Status](http://img.shields.io/travis/kriasoft/babel-starter-kit/master.svg?style=flat-square)](https://travis-ci.org/kriasoft/babel-starter-kit)
[![Coverage Status](https://img.shields.io/coveralls/kriasoft/babel-starter-kit.svg?style=flat-square)](https://coveralls.io/github/kriasoft/babel-starter-kit)
[![Dependency Status](http://img.shields.io/david/dev/kriasoft/babel-starter-kit.svg?style=flat-square)](https://david-dm.org/kriasoft/babel-starter-kit#info=devDependencies)

## Features

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance

## Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.
## License

Copyright © 2018 Belikov Oleg. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/waspar/waspar/blob/master/LICENSE.txt) file.