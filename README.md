# Angular [scrollReveal.js](http://scrollrevealjs.org/) Directive

Installation
------------
> **Disclaimer:** scrollReveal.js is in early development, and breaking changes will likely occur in future updates. Before updating, please refer to the [CHANGELOG](https://github.com/julianlloyd/scrollReveal.js/blob/master/CHANGELOG.md) for details.

#### Download
[master.zip](https://github.com/orapouso/fox-angular-scrollReveal.js/archive/master.zip)

#### GitHub
`git clone https://github.com/orapouso/fox-angular-scrollReveal.js.git`

#### Bower
`bower install fox-angular-scrollReveal.js`

***
Load script after scrollReveal's

```html
  <script src="path/to/scrollReveal.js"></script>
  <script src="path/to/fox-angular-scrollReveal.js"></script>
```

Include module dependency

```javascript
  angular.module('myApp', ['fox.scrollReveal']);
```

Basic Usage
-----------
Needs a custom attribute on the container of all elements so it can start the controller. With that you can also inject your custom defaults.
```html
<div data-sr-container="{ custom defaults }">
  <!-- Same as scrollReveal's basic usage. -->
  <div data-sr="enter left and move 50px over 1.33s"> Foo </div>
  <div data-sr="enter from the bottom after 1s"> Bar </div>
  <div data-sr="wait 2.5s and then ease-in-out 100px"> Baz </div>
</div>
```

Other than that it works just like the normal [scrollReveal.js](http://scrollrevealjs.org/) would. There is a "scroll-reveal" attribute directive, but it does not mess with the original custom attribute from scrollReveal.js. It is only used to register the element with the controller.

Documentation
-------------
Refer to [scrollReveal.js's docs](https://github.com/julianlloyd/scrollReveal.js) to set your custom defaults or animation parameters

#### Special Thanks
To Julian for this awesome library

This directive was inspired by [angular-masonry](https://github.com/passy/angular-masonry)

### [Demo and code example] (http://plnkr.co/edit/HTYndu?p=preview)

License
-------

The MIT License (MIT)

Copyright © 2014 [Rafael Raposo](https://twitter.com/orapouso)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
