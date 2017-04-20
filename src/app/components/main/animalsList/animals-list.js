(function(angular) {

  angular.module('app').component('animalsList', {
    templateUrl:  'app/components/main/animalsList/animals-list-template.html',
    controller: ['$state', 'animalsFactory', animalsList],
    controllerAs: 'animalsList'
  });

  /* Inyectamos aquí y arriba $state */
  function animalsList($state, animalsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allAnimals = animalsFactory.getAllAnimals();
    };

    /* Al clicar sobre un elemento de la lista,
    nos vamos al detalle con el método go de $state */
    vm.goToDetail = function() {
      $state.go('detail');
    };
  }

})(angular);
