'use strict';

(function(angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  angular.module('app', ['ui.router']);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var detail = {
      name: 'detail',
      url: '/detail',
      template: '<view-detail></view-detail>'
    };

    $stateProvider.state(main);
    $stateProvider.state(detail)

  
    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');
  }

})(angular);