(function(angular) {

  angular.module('app').component('footerAnimals', {
    templateUrl:  'app/components/commons/footer/footer-animals-template.html',
    controller: footerAnimals,
    controllerAs: 'footerAnimals'
  });

  function footerAnimals() {
    var vm = this;
  }

})(angular);