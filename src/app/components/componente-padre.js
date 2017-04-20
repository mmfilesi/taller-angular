(function(angular) {

  angular.module('app').component('componentePadre', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/padre-template.html',
    // en controller definimos la función que escribimos abajo
    controller: controladorCompoPadre,
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compoPadre'
  });

  /* En esta función escribimos la lógica del controlador */
  function controladorCompoPadre() {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
      vm.foo = 'Soy una propiedad';

      /* propiedad booleana que usaremos de ejemplo en un ng-if */
      vm.propiedadConValorFalso = false;

      /* Array simple que usaremos de ejemplo en un ng-repeat */
      vm.fruits = ['cerezas', 'mangos', 'sopa de remolacha'];

      /* Array de objetos que usaremos de ejemplo en un ng-repeat */
      vm.solarSystem = [
        {id: 0, name: 'Mercury'},
        {id: 1, name: 'Venus'},
        {id: 2, name: 'Earth'},
        {id: 3, name: 'Mars'},
        {id: 4, name: 'Jupiter'},
        {id: 5, name: 'Saturn'},
        {id: 6, name: 'Uranus'},
        {id: 7, name: 'Neptune'}
      ];
    };

    /* Esto es un método que se está invocando desde un botón
    de la template */
    vm.setFoo = function() {
       vm.foo = 'Hey, soy una propiedad que ha cambiado';
    };

    /* Cosas que le vamos a pasar al componente hijo */
      vm.bar = "soy una propiedad definida en el compo padre";
      
      vm.setBar = function() {
        vm.bar = "Hemos cambiado bar desde el padre";
      }
  }

})(angular);