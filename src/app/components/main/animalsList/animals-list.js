(function(angular) {

  angular.module('app').component('animalsList', {
    templateUrl:  'app/components/main/animalsList/animals-list-template.html',
    controller: ['animalsFactory', animalsList],
    controllerAs: 'animalsList'
  });

  function animalsList(animalsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allAnimals = animalsFactory.getAllAnimals();
    };
  }

})(angular);
