var controllers = angular.module('palindromeAngularApp.controllers', []);

controllers.controller('WelcomePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

}]);

controllers.controller('PalindromePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    var mytext = $scope.myText;
    var reserText = '';

    function isPalindrome(myText) {
        var removeChar = myText.replace(/[^A-Z0-9]/ig, "").toLowerCase();

        var checkPalindrome = removeChar.split('').reverse().join('');
        
        $scope.reserverText = checkPalindrome;

        return (removeChar === checkPalindrome);
    }

    if (isPalindrome(mytext)) {
        alert('Is a Palindrome!');
    } else {
        alert('Not is a Palindrome!');
    }

}]);






