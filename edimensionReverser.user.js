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
styles.push("<style>.overlay{position: absolute; width: 100%; height: 100%; top: 0; left: 0;}</style>")

$("body").append(styles);

var courseList = $(".unlist");
courseList.children().each(function(i, li){
	var $li = $(li);
	var titleLower = $li.find(".name>a").text().toLowerCase();
	var anchorHref = $li.find("a").attr("href");
	var $coursebox = $li.children(".coursebox");
	
	$li.css("position", "relative");
	$coursebox.append("<a href='" + anchorHref + "' class='overlay'></a>");

	for (var i = 0; i < highlightCourses.length; i++){
		if (titleLower.indexOf(highlightCourses[i]) > -1){
			$coursebox.addClass("highlighted");
			break;
		}
	}
	for (var i = 0; i < ignore.length; i++){
		if (titleLower.indexOf(ignore[i]) > -1)
			return;
	}
	courseList.prepend(li);
});
