'use strict';

describe('scrollReveal.js Directives', function () {
  beforeEach(module('fox.scrollReveal'));

  var $s, element, $to;
  function createContainer(elem) {
    inject(function ($rootScope, $compile, $timeout, $document) {
      element = angular.element(elem);

      angular.element($document[0].body).append(element);
      $to = $timeout;
      $s = $rootScope.$new();
      $compile(element)($s);
      $s.$digest();
    });
  }

  it('basic', function () {
    createContainer(
      '<div data-sr-container>'+
        '<div class="t1" data-sr="enter left and move 50px over 0.5s">test 1</div>'+
      '</div>'
    );

    jasmine.Clock.useMock();
    jasmine.Clock.tick(501);

    expect(element[0].querySelector('.t1').style.cssText).toBe('visibility: visible; -webkit-transform: translateX(0px) scale(1); opacity: 1; -webkit-transition-property: -webkit-transform, opacity; -webkit-transition-duration: 0.5s, 0.5s; -webkit-transition-timing-function: ease, ease; -webkit-transition-delay: 0s, 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ');
  });
});
