'use strict';

angular.module('yoTemplateApp')
  .directive('footer', function() {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });

HTML  CSS  JS  Result
Edit on 
jQuery("h1").fitText(1.2);