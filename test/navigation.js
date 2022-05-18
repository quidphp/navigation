/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */

// navigation
// script to test the navigation module

// import
import * as Quid from '../index.js';
import { Test } from 'quidphp-browser/test/browser.js';
const { Shortcut } = Quid;
const { d, assert, logError, setData } = Shortcut;

// browser
Test.Navigation = function()
{   
    let r = true;
    
    try 
    {
        if(Env.isBrowser())
        {
            // prepare
            
            // doc
            
            // history
            
            // windowUnload
        }
    } 
    
    catch (e) 
    {
        r = false;
        logError(e);
    } 
    
    return r;
}

// export
export * from '../index.js';