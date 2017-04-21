(function(angular) {

  angular.module('app').factory('animalsFactory', [animalsFactory]);

  function animalsFactory() {
    var module = {};
    var self = module;

   module.allAnimals = [
        {id: 0, name: 'Gatos', img:'cats.jpg'},
        {id: 1, name: 'Camaleones', img:'camaleones.jpg'},
        {id: 2, name: 'Perros', img: 'dogs.jpg'},
        {id: 3, name: 'Hipopótamos', img: 'hipo.jpg'},
        {id: 4, name: 'Cigüeñas', img: 'ciguenas.jpg'},
        {id: 5, name: 'Pulpos', img: 'pulpo.jpg'},
    ];

    module.getAllAnimals = function() {
        return self.allAnimals;
    };

    return module;
  };

})(angular);


