(function(angular) {

  angular.module('app').component('animalsCard', {
    templateUrl:  'app/components/main/animalsCard/animals-card-template.html',
    controller: animalsCard,
    controllerAs: 'animalsCard',
    bindings: {
      itemAnimal: '<'
    }
  });

  function animalsCard() {
    var vm = this;
  }

})(angular);

