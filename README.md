#  mofron-comp-button
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

button component for mofron


# Install
```
npm install mofron  mofron-comp-button
```

# Sample
```html
<require>
    <tag module="mofron-comp-button">Button</tag>
</require>

<script run=init>
let test_ev = (p1,p2,p3) => { alert(p3); }
</script>

<Button size=2rem,0.4rem color="#f0e6fa" clickEvent=@test_ev,"click">
    button
</Button>
<div>
    <Button status=false>disable</Button>
</div>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| ◯ | text | mixed | string: button text contents |
| | | | mofron-comp-text: button text component |
| ◯ | clickEvent | function | click event function |
| | | mixed | function parameter |
| | mainColor | mixed (color) | string: button color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | option | style option |
| | accentColor | mixed (color) | string: button border color, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | option | style option |
| | status | boolean | change enable/disable mode |

