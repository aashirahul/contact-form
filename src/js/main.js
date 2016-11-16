import angular from 'angular';

angular.module('contact-formApp',[])
	   .controller('FormController',['$scope','$http',function($scope,$http){
	   	$scope.forms = [];
	   	$scope.form = {};
	   	$scope.error ={};

	   	function getdata(){
	   		$http({
	   			method: 'GET',
				 url: 'https://class-server.herokuapp.com/collections/arielmessages'
				}).then(function (response){
					$scope.forms = response.data;
					console.log($scope.forms);	
				})
	   	}
	   	getdata();

	    $scope.submitForm = function(){
	   		$http.post('https://class-server.herokuapp.com/collections/arielmessages',$scope.form).then(function(){
	   			getdata();
	   			$scope.form ={};
	   		})
	   	}

	   	$scope.validateForm = function() {
	   		if($scope.validateName($scope.form.name) || $scope.validateEmail($scope.form.email) || $scope.validateWebsite($scope.form.website) || $scope.validateMessage($scope.form.message)) {
	   			return true;
	   		} else {
	   			return false;
	   		}
	   	}

	   	$scope.validateName = function(name){
	   		if(!name){
	   			$scope.error.name = "Please enter name";
	   			return true;
	   		} else {
	   			$scope.error.name ="";
	   			return false;
	   		}
	   	}
	   	$scope.validateEmail = function(email){
	   		if(!email){
	   			$scope.error.email = "Please enter email";
	   			return true;
	   		} else {
	   			if(!email.includes("@")){
	   				$scope.error.email = "Please enter valid email";
	   				return true;
	   			} else{
	   				$scope.error.email = "";
	   				return false;
	   			}
	   		}
	   	}
	   	$scope.validateWebsite = function(website){
	   		if(!website){
	   			$scope.error.website = "Please enter website";
	   			return true;
	   		} else {
	   			if(!(website.startsWith("http://")||website.startsWith("https://"))){
	   				$scope.error.website = "Please enter valid website";
	   				return true;
	   			} else{
	   				$scope.error.website = "";
	   				return false;
	   			}	
	   		}
	   	}
	   	$scope.validateMessage = function(message){
	   		if(!message){
	   			$scope.error.message = "Please enter message";
	   			return true;
	   		} else {
	   			$scope.error.message ="";
	   			return false;
	   		}
	   	}



	   }])