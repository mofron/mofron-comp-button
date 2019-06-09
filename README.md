# mofron-comp-button
A button component for [mofron](https://mofron.github.io/mofron/).<br>
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

# Install

```bash
npm install mofron mofron-comp-button
```

# Sample

```html
<require>
    <tag module="mofron-comp-button">Button</tag>
</require>

<script run=init>
let test_ev = (p1,p2,p3) => { alert(p3); }
</script>

<Button size="2rem","0.4rem" color="#f0e6fa" clickEvent=test_ev,"click">
    button component
</Button>
<div>
    <Button status=false>disable button</Button>
</div>
```

# Parameter

|Simple<br>Param| Parameter Name | Type                              |    Description                      |
|:-------------:|:---------------|:----------------------------------|:------------------------------------|
|       ◯       | text           | string                            | button text contents                |
|               | clickEvent     | function                          | click event function                |
|               |                | mixed                             | event parameter                     |
|               | mainColor      | string/array (color)              | button color (name,hex/[r,g,b,(a)]) |
|               | accentColor    | string/array (color)              | border color (name,hex/[r,g,b,(a)]) |
|               | status         | boolean                           | true: enabled button                |
|               |                |                                   | false: disabled button              |
