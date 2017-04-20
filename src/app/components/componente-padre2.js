(function(angular) {

  angular.module('app').component('componentePadre2', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/padre-template2.html',
    // en controller definimos la función que escribimos abajo
    controller: controladorCompoPadre2,
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compoPadre2'
  });

  /* En esta función escribimos la lógica del controlador */
  function controladorCompoPadre2() {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
        vm.awesome = "cualquier cosa";
      
      vm.setAwesome = function() {
        vm.awesome = "Hemos cambiado awesome desde el padre 2";
      }
    }
  }

})(angular);