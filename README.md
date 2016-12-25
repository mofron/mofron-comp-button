# mofron-component-button
button component for mofron

# Install

```bash
npm install --save-dev mofron
```

# Quick Start
require webpack

```html
<html>
    <head></head>
    <body style="margin:0px;padding:0px;"></body>
    <script src='./path/to/webpack/output.js'></script>
</html>
```

example
```javascript
require('mofron');
require('mofron-comp-button');

// simple use
new mofron.comp.Button('test').init();

var btn = new mofron.comp.Button('size');
btn.width(150);        // set width to 150px
btn.init();                   // set to DOM
btn.height(30);         // enable changing after inited
btn.style('background', 'white');  // css setting

var click = new mofron.comp.Button('click');
click.setClickEvent(function() {
    alert('click');        // click event
});
click.init();
```
