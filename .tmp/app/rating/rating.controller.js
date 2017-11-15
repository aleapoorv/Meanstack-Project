'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RatingComponent = function () {
    function RatingComponent($http, $scope, socket) {
      _classCallCheck(this, RatingComponent);

      this.$http = $http;
      this.socket = socket;
      this.message = 'Hello';
      this.mapp_arr = [];
      this.re = [];
      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('ratingendpoint');
      });
    }

    _createClass(RatingComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/ratingendpoints').then(function (response) {
          _this.re = response.data;
          _this.socket.syncUpdates('ratingendpoints', _this.re);
        });
        this.$http.get('/api/moviemappingendpoints').then(function (response) {
          _this.mapp_arr = response.data;
        });
      }
    }, {
      key: 'insertReview',
      value: function insertReview() {

        this.$http.post('/api/ratingendpoints', {

          USERNAME: this.username,
          COMMENT: this.review

        });
      }
    }]);

    return RatingComponent;
  }();

  angular.module('yoTemplateApp').component('rating', {
    templateUrl: 'app/rating/rating.html',
    controller: RatingComponent,
    controllerAs: 'ratingCtrl'
  });
})();
//# sourceMappingURL=rating.controller.js.map
