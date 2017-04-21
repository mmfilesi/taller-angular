(function(angular) {

  angular.module('app').component('headerAnimals', {
    templateUrl:  'app/components/commons/header/header-animals-template.html',
    controller: ['$state', headerAnimals],
    controllerAs: 'headerAnimals'
  });

  function headerAnimals($state) {
    var vm = this;

    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);