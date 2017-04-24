(function(angular) {

  angular.module('app').factory('animalsFactory', [animalsFactory]);

  function animalsFactory() {
    var module = {};
    var self = module;

   module.allAnimals = [
        {id: 0, name: 'Gatos', img:'cats.jpg', type: 'mamiferos'},
        {id: 1, name: 'Camaleones', img:'camaleones.jpg', type: 'mamiferos'},
        {id: 2, name: 'Perros', img: 'dogs.jpg', type: 'mamiferos'},
        {id: 3, name: 'Hipopótamos', img: 'hipo.jpg', type: 'aves'},
        {id: 4, name: 'Cigüeñas', img: 'ciguenas.jpg', type: 'aves'},
        {id: 5, name: 'Pulpos', img: 'pulpo.jpg', type: 'aves'},
    ];

    module.getAllAnimals = function() {
        return self.allAnimals;
    };

    module.getAnimalById = function(_id_) {
      var len = self.allAnimals.length;
      var id = parseInt(_id_);

      if ( !id ) {
        return false;
      }

      while ( len-- ) {
        if ( self.allAnimals[len].id === id ) {
          return self.allAnimals[len];
        }
      }
    };

    module.addAnimal = function(newAnimal) {
      newAnimal.id = self.allAnimals.length;
      self.allAnimals.push(newAnimal);
    };

    return module;
  };

})(angular);


