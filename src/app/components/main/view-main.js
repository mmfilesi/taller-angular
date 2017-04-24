(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/view-main-template.html',
    controller: ['$state', viewMain],
    controllerAs: 'viewMain'
  });

  function viewMain($state) {
    var vm = this;

    vm.$onInit = function() {
      vm.subtitulares = 'miClaseMaravillosa';
      vm.subtitularesConFondo = 'miOtraClaseMaravillosa';
      vm.foo = true;
      vm.ukaLele = 'trololo';
    };

    vm.renders = {};

    vm.renders.calculaClaseMaravillosa = function() {
      if ( 1 === 1) {
        return true;
      }
      return false;
    };

    vm.actions = {};

    vm.actions.goToAdd = function() {
       $state.go('addAnimal');
     };
  }

 

})(angular);