(function(angular) {

  angular.module('app').component('viewEdit', {
    templateUrl:  'app/components/edit/view-edit-template.html',
    controller: ['animalsFactory', viewEdit],
    controllerAs: 'viewEdit'
  });

  function viewEdit(animalsFactory) {
    var vm = this;

    vm.$onInit = function() {
      /* Cargamos todos los animales para llenar el combo */
      vm.allAnimals = animalsFactory.getAllAnimals();
      /* Inicializamos las variables que le pasaremos a la vista */
      vm.animalName     = '';
      vm.animalImg      = '';
      vm.animalType     = '';
      /* Por último, enseñamos el panel de edición */
      vm.editPanelShow  = false;
    };

    vm.editAnimal = function() {
      var animalSelected;

      /* Si no se ha seleccionado nada, no seguimos */
      if ( !vm.animalSelected ) {
        return;
      }
      /* Seleccionamos el animal indicado en el combo y
      seteamos nuestros ng-modelos */
      animalSelected    = animalsFactory.getAnimalById(vm.animalSelected);
      vm.animalName     = animalSelected.name;
      vm.animalImg      = animalSelected.img;
      vm.animalType     = animalSelected.type;
      /* Por último, enseñamos el panel de edición */
      vm.editPanelShow  = true;      
     };

    vm.addAnimal = function() {
      var animatToEdit = {
        name: vm.animalName, 
        img: vm.animalImg,
        type: vm.animalType
      };
      
      /* Le pasamos los datos y el id */
      animalsFactory.updateAnimal(vm.animalSelected, animatToEdit);
    }
  };

})(angular);