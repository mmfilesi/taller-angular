(function(angular) {

  angular.module('app').component('componenteHijo', {
    templateUrl: 'app/components/hijo-template.html',
    controller: controladorCompoHijo,
    controllerAs: 'compoHijo',
    bindings: {
      propiedadCadena: '@',
      propiedadInterpretada: '<',
      metodoPaterno: '&'   
    }
  });

  function controladorCompoHijo() {
    /* Este controlador no tiene nada, pq toda lógica se organiza desde el padre */
  }

})(angular);

