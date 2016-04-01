var controllers = angular.module('palindromeAngularApp.controllers', []);

controllers.controller('WelcomePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

}]);

controllers.controller('PalindromePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    var mytext = $scope.myText;
    var reserText = '';
    function isPalindrom(mytext) {
        var i1 = 0;
        var i2 = mytext.length - 1
        while (i2 > i1) {
            if (word[i1] != word[i2]) {
                return false;
            }
            ++i1;
            --i2;
        }
        return true;
    }

    if(isPalindrom(mytext)){
        alert('Is a Palindrome!');
    }else{
        alert('Not is a Palindrome!'); 
    }

}]);






