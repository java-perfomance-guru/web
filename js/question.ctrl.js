(function() {
	angular
		.module('formApp')
		.controller('QuestionCtrl', QuestionCtrl);

	QuestionCtrl.$inject = ['$scope', 'data', 'QUESTIONS', '$state'];

	function QuestionCtrl($scope, data, QUESTIONS, $state) {
		var vm = this;
		vm.question = data;
		vm.questionsCount = QUESTIONS.length;

		var saveResults = function() {
			console.log('saveResults function');
		}

		vm.back = function() {
			saveResults();
			$state.go('question.id', {
				'id': vm.question.id - 1
			});
		}

		vm.next = function() {
			saveResults();
			$state.go('question.id', {
				'id': vm.question.id + 1
			});
		}


	}

})();
