"use strict";

app.factory("BookFactory", function($q, $http){

	let getGuides = () => {
		let items = [];  //hold onto items when i get them
		return $q((resolve, reject) => {
			$http.get('./data/guides.json') //tell it where to go get it, can put in a url /// .get is like an ajax call
			.then((itemObject) => {
				let itemCollection = itemObject.data;  //when itemObject comes back, part of the object is data, so have to go down to get the data in the object
				console.log("itemCollection", itemCollection);
				resolve(itemCollection.guides); //want to resolve the flavors inside the itemCollection that is the data from the itemObject
			})
			.catch((error) => { //different way of dealing with errors
				reject(error);
			});
		});
	};
	return {getGuides}; //need to return it so we can use it
});