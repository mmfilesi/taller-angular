(function(angular) {

  angular.module('app').component('headerAnimals', {
    templateUrl:  'app/components/commons/header/header-animals-template.html',
    controller: headerAnimals,
    controllerAs: 'headerAnimals'
  });

  function headerAnimals() {
    var vm = this;
  }

})(angular);