(function(angular) {

  angular.module('app').factory('animalsFactory', [animalsFactory]);

  function animalsFactory() {
    var module = {};
    var self = module;

    var allAnimals = [
        {id: 0, name: 'Unicornios'},
        {id: 1, name: 'Pitufos'},
        {id: 2, name: 'Gatos'},
    ];

    module.getAllAnimals = function() {
        return allAnimals;
    };

    return module;
  };

})(angular);


