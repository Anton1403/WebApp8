questApp.controller('QuestionController',
    function QuestionController($scope, $http) {

        $scope.loaded = false;

        $scope.load = function () {
            var conf = {
                timeout: 100
            };
            $http.get('question.json', conf).
                then(function success(response) {
                        $scope.question = response.data.question;
                        $scope.loaded = true;
                        console.log(response.config);
                    }, function error(response) {
                        console.log("Возникла ошибка");
                        console.log("код ответа: " + response.status);
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