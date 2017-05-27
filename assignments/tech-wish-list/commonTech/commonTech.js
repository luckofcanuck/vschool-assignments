var app = angular.module("myApp");

app.controller("commonController", ["$scope", function($scope){
	
	  $scope.wishes = [
        {
            imageUrl: "http://www.sandhillskids.com/wp-content/uploads/2016/06/computer-repair.png",
            item: "Computer",
            price: 500
        },
       {
            imageUrl: "http://www.sandhillskids.com/wp-content/uploads/2016/06/computer-repair.png",
            item: "Compooper",
            price: 100
        },
        {
            imageUrl: "http://www.sandhillskids.com/wp-content/uploads/2016/06/computer-repair.png",
            item: "Compewter",
            price: 700
		}]
		
}]);

