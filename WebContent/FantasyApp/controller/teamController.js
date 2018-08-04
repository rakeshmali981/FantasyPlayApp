app.controller("teamController", ['$scope','$mdDialog', 'dataService', function($scope, $mdDialog, dataService){
	$scope.message = ", Wellcome!";
	
	$scope.teams = dataService.teams;
	
	$scope.teamDetails = function(ev){
	    $mdDialog.show({
	      controller: 'dialogCtrl',
	      templateUrl: "/FantasyPlay/PartialPages/Templates/TABDIALOG.TMPL.html",
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true
	    })
	        .then(function(answer) {
	          $scope.status = 'You said the information was "' + answer + '".';
	        }, function() {
	          $scope.status = 'You cancelled the dialog.';
	        });
	}
}]);