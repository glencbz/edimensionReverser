// ==UserScript==
// @name         eDimension Reverser
// @namespace    https://github.com/glencbz/edimensionReverser
// @version      0.1
// @description  Reverses the course list on eDimension
// @author       Glen Choo
// @match        http://edimension.sutd.edu.sg/
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @require 	http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';
 
var $ = window.jQuery;
var courseList = $(".unlist");
courseList.children().each(function(i, li){courseList.prepend(li)});