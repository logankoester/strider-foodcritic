var app = window.app;
/*
* $scope.configs, $scope.branch and $scope.pluginConfig, among others are available from the parent scope
* */
app.controller('FoodcriticCtrl', ['$scope', function ($scope) {
	$scope.saving = false;

	$scope.$watch('configs[branch.name].foodcritic.config', function (value) {
		$scope.config = value || {
			tags: 'any',
			epic_fail_tags: 'any'
		};
	});

	$scope.save = function () {
		$scope.saving = true;
		$scope.pluginConfig('foodcritic', $scope.config, function () {
			$scope.saving = false;
		});
	};

}]);
