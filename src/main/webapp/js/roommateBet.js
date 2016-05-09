'use strict';

var roommateBet = angular.module('roommateBet', ['ui.bootstrap']);

roommateBet.controller('CreateBetController', ['$scope', '$uibModal', function ($scope, $uibModal) {
    $scope.open = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'CreateBet.html'
        })
    }
}]);