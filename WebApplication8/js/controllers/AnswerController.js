questApp.controller('AnswerController', function AnswerController($scope, $http) {
    $scope.response = {};
    $scope.save = function(answer, answerForm) {
        if (answerForm.$valid) {
            $http.post("json.json", answer).then(function success(response) {
                $scope.response = response.data;
            });
        }
    };
})