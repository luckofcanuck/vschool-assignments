var app = angular.module("dishApp");

app.service("yelpService", function($http){

	this.getYelp = function(rest, city, config){
		console.log(config);
		return $http.get("localhost:8000/yelpsearch" + rest + "&location=" + city, config)
      .then(function(response){
        console.log(response);
      })
	}


})

//
// app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
//     this.request = function(config) {
//         var token = TokenService.getToken();
//         if (token) {
//             config.headers = config.headers || {};
//             config.headers.Authorization = "Bearer " + token;
//         }
//         return config;
//     };
//
//     this.responseError = function(response) {
//         if (response.status === 401) {
//             TokenService.removeToken();
//             $location.path("/login");
//         }
//         return $q.reject(response);
//     };
// }]);
//
// app.config(["$httpProvider", function ($httpProvider) {
//     $httpProvider.interceptors.push("AuthInterceptor");
// }]);
