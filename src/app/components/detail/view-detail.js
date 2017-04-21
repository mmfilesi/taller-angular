(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/detail/view-detail-template.html',
    controller: ['$stateParams', viewDetail],
    controllerAs: 'viewDetail'
  });

  function viewDetail($stateParams) {
    var vm = this;

    vm.$onInit = function() {
      var idAnimal = $stateParams.idAnimal;
      console.log('El id del animal buscado es: ', idAnimal)
    };
  }

})(angular);