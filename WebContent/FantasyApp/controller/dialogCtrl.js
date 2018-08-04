app.controller("dialogCtrl", ['$scope','$mdDialog', function($scope, $mdDialog){
	
	$scope.close = function(){
		$mdDialog.cancel();
	}
}]);