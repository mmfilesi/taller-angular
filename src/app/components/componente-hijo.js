(function(angular) {

  angular.module('app').component('componenteHijo', {
    templateUrl: 'app/components/hijo-template.html',
    controller: ['$log', 'demoFactory', controladorCompoHijo],
    controllerAs: 'compoHijo',
    bindings: {
      propiedadCadena: '@',
      propiedadInterpretada: '<',
      metodoPaterno: '&'   
    }
  });

  function controladorCompoHijo($log, demoFactory) {
   var vm = this;

   console.log('soy demoFactory', demoFactory)

   vm.$onInit = function() {
     vm.allFilms = demoFactory.getAllFilms();
     
     $log.log('todo listo');
   };

   vm.$onChanges = function() {
      $log.log('se ha producido un cambio');
     };

    vm.$onDestroy = function() {
     $log.log('me voy');
   };


  }

})(angular);

