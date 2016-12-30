/**
 * Created by pately1 on 12/29/16.
 */
(function () {
    'use strict';

    angular
        .module('Music', ['spotify', 'ngResource'])
        .config(function (SpotifyProvider) {
            SpotifyProvider.setClientId('547609febd784e648a965fc37f903116');
        })
        .controller('MainCtrl', ['$scope', 'Spotify','$http', '$resource','$sce', function ($scope, Spotify, $http, $resource, $sce) {

            var spotify_api = $resource('https://api.spotify.com/v1/search');
            $scope.showPlayer = false;

            $scope.srch = function () {
                $scope.showResults = true;
                $scope.data = spotify_api.get({q:$scope.album, type:"artist"});
                console.log($scope.data);
            };

            $scope.playMe = function (x) {
                $scope.showPlayer = true;
                $scope.showResults = false;
                $scope.uri = $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=" + x.uri);
            };

        }]);
})();