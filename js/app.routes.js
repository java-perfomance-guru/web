(function() {
	angular.module('formApp')
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('startQuestionnaire', {
					'url': '/start',
					controller: ['$state', function ($state) {
						$state.go('question.id', {id: 1});
					}]
				})
				.state('question', {
					url: '/question',
					abstract: true,
				})
				 .state('question.id', {
					url: '/:id',
					views: {
						'@': {
							templateUrl: 'questions/question.html',
							controller: 'QuestionCtrl as question',
							resolve: {
								data: function(QUESTIONS, $stateParams) {
									return _.filter(QUESTIONS, {
										'id': Number($stateParams.id)
									})[0];
								}
							}
						}
					}
				 })
		})
})();
