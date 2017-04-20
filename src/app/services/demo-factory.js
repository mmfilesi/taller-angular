(function(angular) {

  angular.module('app').factory('demoFactory', [demoFactory]);

  function demoFactory() {
    var module = {};
    var self = module;

    var allFilms = [
        {id: 0, title: 'Casablanca'},
        {id: 1, title: 'Gilda'},
        {id: 2, title: 'ET'},
    ];

    module.getAllFilms = function() {
        return allFilms;
    };

    module.addFilm = function(newTitle) {
        var newFilm = {};

        if ( !newTitle ) {
            return false;
        }
        newFilm.id = allFilms.length;
        newFilm.title = newTitle;
        allFilms.push(newFilm);
        return true;
    };

    return module;
  };

})(angular);


