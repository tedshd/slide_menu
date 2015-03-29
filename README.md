# slide_menu
slide menu

![demo](image/demo.gif)

## Usage

include

`<link rel="stylesheet" href="css/slide_menu.css">`

`<script src="javascript/slide_menu.js"></script>`

### html

Add in `body`

```html
<div id="slide-menu" class="slide-menu-close">
    <div id="slide-menu-bg"></div>
</div>
<div id="slide-container" class="">
    <div id="slide-container-bg">
        <div class="head">
            <button id="slide_menu_trigger">OPEN</button>
        </div>
        <!-- add code -->
        <div id="bd">
            This is body
        </div>
    </div>
    <div id="push-open-layer"></div>
</div>
```

### JavaScript

```javascript
var slideMenu = new initSlideMenu({type: 'slide-over'});

// use click event trigger open menu
document.querySelector('#slide_menu_trigger').addEventListener(
    'click',
    function (e) {
        e.preventDefault();
        slideMenu.openMenu();
    }
);
```

## API

```javascript
var slideMenu = new initSlideMenu({type: 'slide-over'});
```

* type(string)
    * menu open type
    * `slide-over` or `slide-push`

### Method

* openMenu
    * open menu
    * `slideMenu.openMenu();`

* closeMenu
    * close menu
    * * `slideMenu.closeMenu();`