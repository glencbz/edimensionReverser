// ==UserScript==
// @name         eDimension Reverser
// @namespace    https://github.com/glencbz/edimensionReverser
// @version      0.7
// @description  Reverses the course list on eDimension
// @author       Glen Choo
// @match        http://edimension.sutd.edu.sg/
// @grant       GM_addStyle
// @require 	http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

 //THESE ARE THE COURSES YOU WANT TO HIGHLIGHT
//********************************************
var highlightCourses = [
	"optimization",
	"machine",
	"database",
	"the mind",
];
//********************************************

//THESE ARE THE COURSES YOU WANT TO END UP AT THE BOTTOM
//********************************************
var ignore =[
	"survey",
	"capstone"
];
//********************************************

highlightCourses = highlightCourses.map(function(obj){
	return obj.toLowerCase();
});
var $ = window.jQuery;
var styles = ["<style>.highlighted{background-color: #E8F6FF; border: 2px solid #C9DFFF; border-radius: 4px;}</style>"];
styles.push("<style>.unlist > li{cursor: pointer;}</style>");

$("body").append(styles);

var courseList = $(".unlist");
courseList.children().each(function(i, li){
	var $li = $(li);
	var titleLower = $li.find(".name>a").text().toLowerCase();
	var anchorHref = $li.find("a").attr("href");
	$li.click(function(){
		location.href = anchorHref;
	});

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
