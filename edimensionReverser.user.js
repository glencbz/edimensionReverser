// ==UserScript==
// @name         eDimension Reverser
// @namespace    https://github.com/glencbz/edimensionReverser
// @version      0.6
// @description  Reverses the course list on eDimension
// @author       Glen Choo
// @match        http://edimension.sutd.edu.sg/
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @require 	http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';
 
var highlightCourses = [
	"optimization",
	"machine",
	"database",
	"the mind",
];

var ignore =[
	"survey",
	"capstone"
];

highlightCourses = highlightCourses.map(function(obj){
	return obj.toLowerCase();
});
var $ = window.jQuery;
var styles = "<style>.highlighted{background-color: #E8F6FF;}</style>";
$("body").append(styles);

var courseList = $(".unlist");
courseList.children().each(function(i, li){
	var $li = $(li);
	var titleLower = $li.find(".name>a").text().toLowerCase();
	for (var i = 0; i < highlightCourses.length; i++){
		if (titleLower.indexOf(highlightCourses[i]) > -1){
			$li.children(".coursebox").addClass("highlighted");
			break;
		}
	}
	for (var i = 0; i < ignore.length; i++){
		if (titleLower.indexOf(ignore[i]) > -1)
			return;
	}
	courseList.prepend(li);
});
