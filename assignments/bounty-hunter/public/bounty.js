var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "bountyService", function($scope, bountyService){
	
	$scope.bounties = [];
	
	bountyService.getBounties().then(function(bounties){
		$scope.bounties = bounties;
	})
	
	$scope.delete = function(index){
		var bounty = $scope.bounties[index];
		bountyService.deleteBounty(bounty).then(function(data){
			$scope.bounties.splice(index, 1);
		})
	}
	
	$scope.submit = function(newBounty){
		console.log(newBounty);
		if ($scope.checked){
			newBounty.living = true;
		} else {
			newBounty.living = false;
		}
		bountyService.submitBounty(newBounty).then(function(data){
			console.log(data)
		})
	}
	
	$scope.put = function(bounty){
		bountyService.editBounty(bounty)
			.then(function(response){
			console.log(response)
		})
	}
}])