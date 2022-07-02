# QuidPHP/Navigation
[![Release](https://img.shields.io/github/v/release/quidphp/navigation)](https://packagist.org/packages/quidphp/navigation)
[![License](https://img.shields.io/github/license/quidphp/navigation)](https://github.com/quidphp/navigation/blob/master/LICENSE)
[![Code Size](https://img.shields.io/github/languages/code-size/quidphp/navigation)](https://github.com/quidphp/navigation)

## About
**QuidPHP/Navigation** contains a Javascript module for navigating a website without reloading.

## License
**QuidPHP/Navigation** is available as an open-source package under the [MIT license](LICENSE).

## Documentation
**QuidPHP/Navigation** documentation is available at [QuidPHP/Docs](https://github.com/quidphp/docs).

## Installation
**QuidPHP/Navigation** can be easily installed with [NPM](https://www.npmjs.com/package/quidphp-navigation).
``` bash
$ npm install quidphp-navigation
```
Once installed, the package will be available within your *node_modules* folder.

## Dependency
**QuidPHP/Navigation** has the following dependency:
- [quidphp-browser](https://github.com/quidphp/browser) - JavaScript module with helpers for use within the browser

All dependencies will be resolved by using the [NPM](https://www.npmjs.com) installation process.

## Requirement
**QuidPHP/Navigation** requires any modern browser (not Internet Explorer).
    
## Comment
**QuidPHP/Navigation** code is commented and all methods are explained (in French).

## Overview
**QuidPHP/Navigation** contains 3 JavaScript files. Here is an overview:
- [doc](src/doc.js) - Root component for a document node
- [history](src/history.js) - Component managing site navigation with the HistoryAPI
- [windowUnload](src/windowUnload.js) - Component to manage the unload notification with the window object

### Distributable
**QuidPHP/Navigation** contains 2 scripts that can be used in the browser.
- [navigation](dist/navigation.js) - Minified and transpiled script ready for production
- [navigation-test](dist/navigation-test.js) - Same as navigation.js but also contains the module tests

### Testing
**QuidPHP/Navigation** contains 2 test scripts:
- [navigation](test/navigation.js) - Script to test the navigation module
- [run](test/run.js) - File to run the testsuite in navigation

**QuidPHP/Navigation** testsuite can be run in the browser by creating a new [QuidPHP/Assert](https://github.com/quidphp/assert) project. Some tests can also be run in Node with the command: 
``` bash
$ npm run test
```