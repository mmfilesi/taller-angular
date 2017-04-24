(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/detail/view-detail-template.html',
    controller: ['$stateParams', 'animalsFactory', viewDetail],
    controllerAs: 'viewDetail'
  });

  function viewDetail($stateParams, animalsFactory) {
    var vm = this;

    vm.$onInit = function() {
      var idAnimal = $stateParams.idAnimal;

      vm.animalDetail = animalsFactory.getAnimalById(idAnimal)
      
    };
  }

})(angular);