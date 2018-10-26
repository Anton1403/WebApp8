questApp.controller('QuestionController',
    function QuestionController($scope, $http) {

        $scope.loaded = false;

        $scope.load = function () {
            $http.get('question.json').
                then(function success(response) {
                        $scope.question = response.data.question;
                        $scope.loaded = true;
                }, function error(response) {

                    }
                );
        };
        $scope.voteUp = function (answer) {
            answer.rate++;
        };
        $scope.voteDown = function (answer) {
            answer.rate--;
        };
    }
)