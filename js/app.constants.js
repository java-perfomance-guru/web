(function() {
	'use strict';

	angular
		.module('formApp')
		.constant('QUESTIONS', [{
			'id': 1,
			'questionType': 'text',
			'question': 'For how many years your is online?',
			'answers': [{
				'text': '',
				'id': 1
			}]
		}, {
			'id': 2,
			'questionType': 'radio',
			'question': 'Is your traffic and server loadness growing with time?',
			'answers': [{
				'text': 'Yes',
				'id': 1
			}, {
				'text': 'No',
				'id': 2
			}]
		}, {
			'id': 3,
			'questionType': 'radio',
			'question': 'If so how you increase the throughput of you application?',
			'answers': [{
				'text': 'Add new server node',
				'id': 1
			}, {
				'text': 'By more powerful hardware (ram, CPU)',
				'id': 2
			}, {
				'text': 'Tune application performance bottlenecks',
				'id': 3
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 4
			}]
		}, {
			'id': 4,
			'questionType': 'radio',
			'question': 'How big losses (money / reputation) of your business when application is down during day time for one hour?',
			'answers': [{
				'text': 'Losses are miserable',
				'id': 1
			}, {
				'text': 'Losses are acceptable',
				'id': 2
			}, {
				'text': 'Losses are significant',
				'id': 3
			}, {
				'text': 'Downtime ruins the business',
				'id': 4
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 5
			}]
		}, {
			'id': 5,
			'questionType': 'radio',
			'question': 'How big losses (money / reputation) of your business when application is down during night time for one hour?',
			'answers': [{
				'text': 'Losses are miserable',
				'id': 1
			}, {
				'text': 'Losses are acceptable',
				'id': 2
			}, {
				'text': 'Losses are significant',
				'id': 3
			}, {
				'text': 'Downtime ruins the business',
				'id': 4
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 5
			}]
		}, {
			'id': 6,
			'questionType': 'radio',
			'question': 'What is the average downtime for releasing new version of application?',
			'answers': [{
				'text': 'No downtime',
				'id': 1
			}, {
				'text': 'Less than 5 minutes',
				'id': 2
			}, {
				'text': 'Less than 10 minutes',
				'id': 3
			}, {
				'text': 'About 30 minutes',
				'id': 4
			}, {
				'text': 'About an hour',
				'id': 5
			}, {
				'text': 'More',
				'id': 6
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 7
			}]
		}, {
			'id': 7,
			'questionType': 'checkbox',
			'question': 'Do you use any application health monitoring tooth?',
			'answers': [{
				'text': 'nagios',
				'id': 1
			}, {
				'text': '..',
				'id': 2
			}, {
				'text': '...',
				'id': 3
			}, {
				'text': '....',
				'id': 4
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 5
			}]
		}, {
			'id': 8,
			'questionType': 'radio',
			'question': 'How often your application is down?',
			'answers': [{
				'text': 'Never',
				'id': 1
			}, {
				'text': 'Very rarely',
				'id': 2
			}, {
				'text': 'More often than I would like',
				'id': 3
			}, {
				'text': 'Complete disaster',
				'id': 4
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 5
			}]
		}, {
			'id': 9,
			'questionType': 'radio',
			'question': 'Is you application is in distributed environment (cloud etc.)?',
			'answers': [{
				'text': 'Yes',
				'id': 1
			}, {
				'text': 'No',
				'id': 2
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 3
			}]
		}, {
			'id': 10,
			'questionType': 'text',
			'question': 'What the number of application servers you user in production?',
			'answers': [{
				'text': '',
				'id': 1
			}]
		}, {
			'id': 11,
			'questionType': 'radio',
			'question': 'What happens if single node from production servers is down?',
			'answers': [{
				'text': 'No impact on the users. Cold standby server starts immediately',
				'id': 1
			}, {
				'text': 'Applications becomes slower',
				'id': 2
			}, {
				'text': 'Application doesn\'t work',
				'id': 3
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 4
			}]
		}, {
			'id': 12,
			'questionType': 'radio',
			'question': 'How do you troubleshoot when something wrong happens to the application?',
			'answers': [{
				'text': 'Check logs',
				'id': 1
			}, {
				'text': 'Use JVM embedded tools: jmap, jstack, jconsole etc',
				'id': 2
			}, {
				'text': 'Reboot the server',
				'id': 3
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 4
			}]
		}, {
			'id': 13,
			'questionType': 'radio',
			'question': 'How often you reboot servers on order to get application stable again?',
			'answers': [{
				'text': 'Never',
				'id': 1
			}, {
				'text': 'Very rarely',
				'id': 2
			}, {
				'text': 'More often than I like',
				'id': 3
			}, {
				'text': 'Complete disaster',
				'id': 4
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 5
			}]
		}, {
			'id': 14,
			'questionType': 'radio',
			'question': 'How do you troubleshoot memory leaks?',
			'answers': [{
				'text': 'jmap',
				'id': 1
			}, {
				'text': '..',
				'id': 2
			}, {
				'text': '...',
				'id': 3
			}, {
				'text': '....',
				'id': 4
			}, {
				'text': 'I am not right person to answer on such kind question',
				'id': 5
			}]
		}]);

})();
