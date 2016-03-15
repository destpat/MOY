// MAIN CONTROLLER
function mainController($scope) {
	
	$scope.add = function(){
		$scope.email = User.create.email;
        $scope.pseudo = User.create.pseudo;
        $scope.created = User.create.created;
        $scope.password = User.create.password;
        $scope.password2 = User.create.password2;
       
	}
    
    
    //$scope.title = "Todo List";
	
	/*function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;
		});
	}*/
    
    
    /*var data = {};
		data.description = $scope.description;
		todoService.create(data).then(function(res){
			load();
		});
		$scope.description = "";*/
    
    
    
	/*$scope.update = function(todo){
		todoService.update(todo._id, todo).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		todoService.delete(todo._id).then(function(res){
			load();
		});
	}
	load();*/
    
    //($scope, $http, todoService)
}
