/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/navigation/blob/master/LICENSE
 */

// index
// entry file for the module

// import quidphp-browser
import * as Quid from 'quidphp-browser';
const { Component } = Quid;

// simple import
import Doc from './src/doc.js';
import History from './src/history.js';
import WindowUnload from './src/windowUnload.js';

// component
Component.Doc = Doc;
Component.History = History;
Component.WindowUnload = WindowUnload;

// export
export * from 'quidphp-browser';