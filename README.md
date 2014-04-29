Prototype News Ticker {#welcome}
=====================
Prototype News Ticker brings a lightweight and easy to use news ticker.

----------
Installation
---------
#### Step 1: Link required files
First and most important, the Prototype library needs to be included (no need to download - link directly from Google).
```
<!-- Prototype library (served from Google) -->
<script src="//ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js"></script>
<script src="/js/effects.js"></script>
<!-- News Ticker Javascript file -->
<script src="/js/newsticker.js"></script>
<!-- News Ticker CSS file -->
<link href="/css/newsticker.css" rel="stylesheet" />
```

#### Step 2: Create HTML markup
Create a `<div class="newsticker">` element, with a `<li>` for each news. `<li>` can contain images or any other HTML content!
```
<div id="newsticker_default" class="newsticker">
    <ul>
        <li><strong>News 1:</strong> The is a sample newsticker message 01</li>
        <li><strong>News 2:</strong> The is a sample newsticker message 02</li>
        <li><strong>News 3:</strong> The is a sample newsticker message 03</li>
    </ul>
</div>
```

#### Step 3: Call the News Ticker

Call `.Newsticker()` on `<div id="newsticker_default">`.
```
Event.observe(window, "load", function () {
    new Newsticker("newsticker_default")
}, false);
```
Configuration options
------
**interval** News transition duration (in ms)
```
interval: 6000
```
**containerSetStyle** News Ticker container style (`id="newsticker_default"`)
```
containerSetStyle: null
```
**newsContainerSetStyle** News Ticker UL container style
```
newsContainerSetStyle: null
```
**newsInnerContainerSetStyle** Ticker LI container style
```
newsInnerContainerSetStyle: null
```
**before** Append custom html before container
```
before: null
```
**after** Append custom html after container
```
after: null
```
**innerBefore** Append custom html before UL container
```
innerBefore: null
```
**innerAfter** Append custom html after UL container
```
innerAfter: null
```
----------
Demo
---------------
#### Default
![Default Settings][1]
```
Event.observe(window, "load", function () {
    new Newsticker("newsticker_default")
}, false);
```
#### Custom Design
![Custom Design][2]
```
Event.observe(window, "load", function () {
    new Newsticker("newsticker",
        {
            interval: 5000,
            containerSetStyle: { 'color': '#8A6D3B', 'background': '#212A34', 'width': '100%', 'float': 'left', 'padding': '10px 0px 10px 0px' },
            newsContainerSetStyle: { 'width': '94.33%', 'float': 'left', 'padding': '0px 5px 0px 0px', 'border': '0px solid #212A34' },
            newsInnerContainerSetStyle: { 'color': '#57697C', 'background': '#FFF', 'padding-left': '10px' },
            innerBefore: '<div style="width:5%;float:left;text-align: center;color:#fff;">News</div>'
        })
}, false);

```
![Custom Design][3]
```
Event.observe(window, "load", function () {
    new Newsticker("newsticker_1",
        {
            interval: 5000,
            containerSetStyle: { 'color': '#8A6D3B', 'background': '#16a085', 'width': '94%', 'float': 'left', 'padding': '10px 0px 10px 10px' },
            newsContainerSetStyle: { 'width': '100%', 'float': 'left', 'padding': '0px', 'border': '0px solid #212A34' },
            newsInnerContainerSetStyle: { 'color': '#57697C', 'background': '#FFF', 'padding-left': '10px' },
            after: '<div style="width:5%;float:left;text-align: center;color:#fff;background-color:#16a085;padding:10px 0px 10px 0px;">News</div>'
        })
}, false);

```


  [1]: https://lh3.googleusercontent.com/-j9Hvu-cAbTM/U1_GuHXHhxI/AAAAAAAAEDU/JuHgB2dOaA8/w1050-h45-no/default.png
  [2]: https://lh4.googleusercontent.com/-PnYfH9aYmjk/U1_GuEWbNuI/AAAAAAAAEDY/Vq9Ffr2KiuU/w1050-h46-no/design_1.png
  [3]: https://lh4.googleusercontent.com/-qdJu0wYPVu8/U1_GuHivBrI/AAAAAAAAEDg/oqLStww-zYc/w1050-h46-no/design_2.png