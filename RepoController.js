/**
 * Created by Edge on 3/15/2017.
 */
(function () {
    var module = angular.module("githubViewer");

    var RepoController = function($scope, $routeParams, github) {
        onRepo = function(data) {
            $scope.repo = data;
        };

        var onError = function(reason) {
            $scope.error = reason;
        };

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    };

    module.controller("RepoController", RepoController);
}());