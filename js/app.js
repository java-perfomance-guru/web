(function () {
	'use strict';
	
	angular.module('formApp', ['ui.router'])
		.controller('formController', formController);

	formController.$inject = ['$scope', '$state'];

	function formController($scope, $state) {
		var vm = this;

		$scope.startQuestionnaireFunction = function(){
			$state.go('question.id', {id: 1});
		}

	}
})();