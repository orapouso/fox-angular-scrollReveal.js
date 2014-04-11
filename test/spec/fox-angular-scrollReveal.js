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
      '<div data-scroll-reveal-container>'+
        '<div class="t1" data-scroll-reveal="enter left and move 50px over 1.33s">test 1</div>'+
      '</div>'
    );

    $to.flush();
    expect(element[0].querySelector('.t1').style.cssText).toBe('-webkit-transform: translateX(0px); opacity: 1; -webkit-transition-property: -webkit-transform, opacity; -webkit-transition-duration: 1.33s, 1.33s; -webkit-transition-timing-function: ease-in-out, ease-in-out; -webkit-transition-delay: 0s, 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ');
  });
});
