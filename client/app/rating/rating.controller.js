'use strict';

(function(){

class RatingComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.message = 'Hello';
      this.mapp_arr = [];
      this.re = [];
      $scope.$on('$destroy', function(){
        socket.unsyncUpdates('ratingendpoint');
      });
  }




      $onInit() {
        this.$http.get('/api/ratingendpoints').then(response => {
          this.re = response.data;
          this.socket.syncUpdates('ratingendpoints', this.re);
        });
          this.$http.get('/api/moviemappingendpoints').then(response => {
          this.mapp_arr = response.data;
        });

      }
      insertReview() {


     this.$http.post('/api/ratingendpoints', {

    USERNAME: this.username,
COMMENT: this.review

});
}
}

angular.module('yoTemplateApp')
  .component('rating', {
    templateUrl: 'app/rating/rating.html',
    controller: RatingComponent,
   controllerAs: 'ratingCtrl'
  });

})();
