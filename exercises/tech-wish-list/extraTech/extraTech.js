var app = angular.module("myApp");

app.controller("extraController", ["$scope", function($scope){
	
	  $scope.wishes = [
        {
            imageUrl: "https://i.ytimg.com/vi/BOvfrNsCJLU/maxresdefault.jpg",
            item: "Portal Gun",
            price: 500
        },
       {
            imageUrl: "https://i.ytimg.com/vi/BOvfrNsCJLU/maxresdefault.jpg",
            item: "Teleportation Device",
            price: 100
        },
        {
            imageUrl: "https://i.ytimg.com/vi/BOvfrNsCJLU/maxresdefault.jpg",
            item: "Geo-Location Randomizer",
            price: 700
        }]
}]);

