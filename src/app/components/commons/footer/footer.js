(function(angular) {

  angular.module('app').component('footerAnimals', {
    templateUrl:  'app/components/commons/footer/footer-animals-template.html',
    controller: ['$state', footerAnimals],
    controllerAs: 'footerAnimals'
  });

  function footerAnimals($state) {
    var vm = this;

    vm.goToAbout = function() {
      $state.go('aboutUs');
    };
  }

})(angular);