(function (angular, ScrollReveal) {
  'use strict';
  angular.module('fox.scrollReveal', []).controller('ScrollRevealCtrl', [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {
      var timeout, self = this;
      var defaultOpts = { init: true };
      this.setOpts = function (opts) {
        angular.extend(defaultOpts, opts || {});
        if (!this.scrollReveal) {
          this.scrollReveal = new ScrollReveal(defaultOpts);
          $scope.$emit('scrollReveal.created');
        }
      };
      this.scheduleInit = function () {
        if (timeout) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout(function runScrollReveal() {
          $timeout(function () {
            $scope.$emit('scrollReveal.init');
            self.scrollReveal.init();
          }, 1000);
        }, 30);
      };
    }
  ]).directive('scrollRevealContainer', function () {
    return {
      retrict: 'EA',
      controller: 'ScrollRevealCtrl',
      link: {
        pre: function (scope, element, attrs, ctrl) {
          ctrl.setOpts(angular.fromJson(attrs.scrollRevealContainer || '{}'));
        }
      }
    };
  }).directive('scrollReveal', function () {
    return {
      retrict: 'A',
      require: '^scrollRevealContainer',
      link: function link(scope, element, attrs, ctrl) {
        var index;
        ctrl.scheduleInit();
        element.on('$destroy', function () {
          ctrl.scheduleInit();
        });
        scope.$watch('$index', function () {
          if (index !== undefined && index !== scope.$index) {
            ctrl.scheduleInit();
          }
          index = scope.$index;
        });
      }
    };
  });
}(window.angular, window.scrollReveal));