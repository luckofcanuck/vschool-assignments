var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "issueService", function($scope, issueService){
	
	$scope.issues = [];
	
	$scope.up = function(issue){
		issue.totalVotes = (issue.totalVotes + 1);
		issue.currentVoteCount = (issue.currentVoteCount + 1);
		issueService.editIssue(issue)
			.then(function(response){
			console.log(response)
		})
	}
	
	$scope.down = function(issue){
		issue.totalVotes = (issue.totalVotes + 1);
		issue.currentVoteCount = (issue.currentVoteCount - 1);
		issueService.editIssue(issue)
			.then(function(issue){
			console.log(response)
		})
	}
	
	$scope.append = function(issue, addedComment){
		issue.comments.push(addedComment);
		issueService.editIssue(issue)
			.then(function(response){
			console.log(response);
		})
		delete issue.newComment;
	}
	
	$scope.deleteComment = function(issue, index){
		issue.comments.splice(index, 1);
		issueService.editIssue(issue)
			.then(function(response){
			console.log(response);
		})
	}
	
	issueService.getIssues().then(function(issues){
		var sortedIssues = issues.sort(function(a, b){
			if(a.currentVoteCount > b.currentVoteCount) return -1;
			if(a.currentVoteCount < b.currentVoteCount) return +1;
		});
		$scope.issues = issues;
	})
	
	$scope.getTotal = function(){
		issueService.getIssues().then(function(issues){
			var sortedIssues = issues.sort(function(a, b){
				if(a.totalVotes > b.totalVotes) return -1;
				if(a.totalVotes < b.totalVotes) return +1;
			});
			$scope.issues = issues;
		})
	}
	
	$scope.getHighest = function(){
		issueService.getIssues().then(function(issues){
			var sortedIssues = issues.sort(function(a, b){
				if(a.currentVoteCount > b.currentVoteCount) return -1;
				if(a.currentVoteCount < b.currentVoteCount) return +1;
			});
			$scope.issues = issues;
		})
	}
	
	$scope.getMostCommented = function(){
		issueService.getIssues().then(function(issues){
			var sortedIssues = issues.sort(function(a, b){
				if(a.comments.length > b.comments.length) return -1;
				if(a.comments.length < b.comments.length) return +1;
			});
			$scope.issues = issues;
		})
	}
	
	
	
	
	$scope.delete = function(issue, index){
		issueService.deleteIssue(issue).then(function(data){
			$scope.issues.splice(index, 1);
		})
	}
	
	
	
	$scope.submit = function(newIssue){
		newIssue.currentVoteCount = 0;
		newIssue.totalVotes = 0;
		console.log(newIssue);
		issueService.submitIssue(newIssue).then(function(data){
			console.log(data)
		})
		$scope.newIssue = {};
		$scope.getTotal();
	}
	
	$scope.put = function(issue){
		issueService.editIssue(issue)
			.then(function(response){
			console.log(response)
		})
	}
}])