angular.module('ngDateTime', [])
	.directive('ngDateTime', function() {
		var directive = {
			template: '<div class="date-time-widget"><input type="date" ng-model="dateString"><input type="time" ng-model="timeString"></div>',
			replace: true,
			restrict: 'EA',
			scope: {
				model: '=model'
			},
			controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
				$scope.format = 'YYYY-MM-DD HH:mm';

				$scope.updateStrings = function() {
					$scope.wrapper = moment($scope.model);

					$scope.dateString = $scope.wrapper.format('YYYY-MM-DD');
					$scope.timeString = $scope.wrapper.format('HH:mm');
				};

				$scope.updateModel = function() {
					$scope.wrapper = moment($scope.dateString + ' ' + $scope.timeString, $scope.format);
					$scope.model = $scope.wrapper.toDate();
				};

				$scope.updateDate = function() {
					var m = moment($scope.dateString, 'YYYY-MM-DD');

					if(m.isValid()) {
						$scope.updateModel();
					}
				};

				$scope.updateTime = function() {
					var m = moment($scope.timeString, 'HH:mm');

					if(m.isValid()) {
						$scope.updateModel();
					}
				};

				$scope.$watch('model', function(value) {
					$scope.updateStrings();
				}, true);

				$scope.$watch('dateString', function(value) {
					$scope.updateDate();
				});

				$scope.$watch('timeString', function(value) {
					$scope.updateTime();
				});

				$scope.updateStrings();
			}]
		};

		return directive;
	})
	.filter('moment', function() {
		return function(dateString, format) {
			format = format || 'YYYY-MM-DD HH:mm';

			return moment(dateString).format(format);
		};
	});