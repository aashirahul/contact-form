import angular from 'angular';

angular.module('contact-formApp',[])
	   .controller('FormController',['$scope','$http',function($scope,$http){
	   	$scope.forms = [];
	   	$scope.form = {};

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


	   }])