"use strict";

app.controller("BookCtrl", function($scope, BookFactory){

	BookFactory.getGuides()
	.then(function(itemCollection){
		$scope.guides = itemCollection;
		console.log("guides", $scope.guides);
	});
});