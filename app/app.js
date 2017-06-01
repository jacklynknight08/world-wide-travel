"use strict";

var app = angular.module("WorldWideApp", ['ngRoute']);

app.config(function($routeProvider){
 	$routeProvider.
 	when('/guide', {
 		templateUrl: 'partials/books.html',
 		controller: 'BookCtrl'
 	}).
 	otherwise('/');
 });