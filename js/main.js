var app = angular.module('palindromeAngularApp', ['palindromeAngularApp.controllers', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/welcome', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomePageController'
        })
        .when('/palindrome', {
            templateUrl: 'views/palindrome.html',
            controller: 'PalindromePageController'
        })
        .otherwise({
            redirectTo: '/welcome'
        });
}]);
