(function(angular) {

  angular.module('app').component('viewAdd', {
    templateUrl:  'app/components/add/view-add-template.html',
    controller: ['animalsFactory', viewAdd],
    controllerAs: 'viewAdd'
  });

  function viewAdd(animalsFactory) {
    var vm = this;

    vm.$onInit = function() {      
    };

    vm.addAnimal = function() {
       var newAnimal = {name: 'Otro bicho', img:'bicho.jpg'};
       
      animalsFactory.addAnimal(newAnimal);
    }
  }

})(angular);