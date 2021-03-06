/**
 * Created by darin on 1/6/2015.
 */
'use strict';
adsApp.factory('authentication', function () {
    var key = 'user';

    function saveUserData(data) {
        localStorage.setItem(key, angular.toJson(data));
    }

    function getUserData(key) {
        return angular.fromJson(localStorage.getItem(key));
    }

    function getHeaders(argument) {
        var headers = {};
        var userData = getUserData();
        if (userData) {
            headers.Authorization = 'Bearer ' + getUserData().access_token;
        };
        return headers;
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders
    }

});