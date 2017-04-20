(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/detail/view-detail-template.html',
    controller: viewDetail,
    controllerAs: 'viewDetail'
  });

  function viewDetail() {
    var vm = this;
  }

})(angular);