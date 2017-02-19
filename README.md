# mofron-comp-button
button component for mofron

# Install

```bash
npm install --save-dev mofron
```

# Quick Start
please see [here](https://github.com/simpart/mofron) about an overview of mofron

example
```javascript
let Mof = require('mofron');
let Btn = require('mofron-comp-button');

new Btn({
    param      : 'TEST',  // required
    clickEvent : function () {alert('click');},
    width      : 150,
    height     : 40,
    color      : new mofron.Color(255,255,255),
    visible    : true
});
```

#class specification

| Method          | Parameter                                                                    |    Description                  |
|:------------------|:-----------------------------------------------------------------|:-------------------------------|
| clickEvent | function : function for click event listener<br>mixed : function parameter (not required)       |set button click event |
| width              | number or string : button width  | button width getter/setter. <br>(do not specify parameters, if use as getter) |
| height             | number or string : button height  | button width getter/setter. <br>(do not specify parameters, if use as getter) |
| color               | object : mofron.Color                                     | button color getter/setter. <br>(do not specify parameters, if use as getter)  |
