import angular from 'angular';

angular.module('contact-formApp',[])
	   .controller('FormController',['$scope','$http',function($scope,$http){

	   	function getdata(){
	   		$http({
	   			method: 'GET',
				 url: ' https://class-server.herokuapp.com/collections/messages'
				}).then(function success(response){
					console.log(response);
				})
	   	}
	   	getdata();

	   	



	   }])