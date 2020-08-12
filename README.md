#  mofron-comp-button
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

button component for mofron


# Install
```
npm install mofron  mofron-comp-button
```

# Sample
```html
<setting>
    <tag load="mofron-comp-button">Button</tag>
</setting>

<script run=init>
let clk = () => { alert("click"); };
</script>

<Button size=(2rem,0.4rem) color2="#f0e6fa">(button,@clk)</Button>
<div>
    <Button status=false>disable</Button>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: button text contents |
| | | | mofron-comp-text: button text component |
| | | mixed | text component config |
| ◯  | clickEvent | function | click event function |
| | | mixed | function parameter |
| | mainColor | mixed (color) | string: button text color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option |
| | accentColor | mixed (color) | string: button border color, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option |
| | disabled | ||| | enabled | ||| | status | boolean | change enable/disable mode |

