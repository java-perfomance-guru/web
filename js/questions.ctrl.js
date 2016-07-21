(function () {
	angular
		.module('formApp')
		.controller('QuestionsCtrl', QuestionsCtrl);

		QuestionsCtrl.$inject = ['$state'];

		function QuestionsCtrl($state) {
			$state.go('question.id', {'id': 1});
		}

})();