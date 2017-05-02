#Pushy
## Fork - This version supports both pushy left and pushy right.

---

Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions. This project was inspired by the off-canvas navigation menu seen on [Medium](https://medium.com/).

Pushy has been implemented on many sites, [check them out!](https://github.com/christophery/pushy#sites-using-pushy) Feel free to [let me know](http://www.twitter.com/cmyee) if you use Pushy in one of your websites.

[View Demo](http://www.christopheryee.ca/pushy) | [WordPress Theme](https://github.com/christophery/pushypress)

##Features

- Uses CSS transforms & transitions.
- Smooth performance on mobile devices.
- jQuery animation fallback for IE 7 - 9.
- Menu closes when a link is selected.
- Menu closes when the site overlay is selected.
- It's responsive!

##Requirements

- [jQuery 1.9+](http://jquery.com/)

##Install

1. Add the stylesheet (pushy.css) in your head and the JS (pushy.min.js) file in your footer.

2. Insert the following markup into your body.

```html
<!-- Pushy Menu -->
<nav id="menu" data-pushy='{"direction": "left"}'>
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
    </ul>
</nav>

<!-- Site Overlay -->
<div class="pushy-overlay"></div>

<!-- Your Content -->
<div class="pushy-container">
    <!-- Menu Button -->
    <div data-pushy-trigger="menu">&#9776; Menu</div>
</div>
```

* `data-pushy` is placed on the element you want to set off-canvas. It currently accepts one parameter in JSOn format of `direction` which can be "left" or "right".
* `.pushy-overlay` is added to an element on the same level as your off-canvas content
* `.pushy-container` is added to any element that you want to be pushed when the off-canvas content is activated
* `data-pushy-trigger` indicates the ID of the off-canvas element you'd like trigger. You can have multiple buttons triggering the same off-canvas content.

##Bower

If you are comfortable with command line, you can install Pushy as a [Bower](http://bower.io/) package:

```
bower install pushy-jamesckemp --save
```

##Tips

- Use the ```.pushy-container``` CSS class on any HTML elements you want to push.

```html
<header class="pushy-container">
    <h1>This is a Heading</h1>
    <h2>This is a subheading</h2>
</header>

<!-- Your Content -->
<div class="pushy-container"></div>
```

##Browser Compatibility

| Desktop       | Mobile                                      |
| ------------- | ------------------------------------------- |
| IE 9-11       | Chrome (Android 4.x+)                       |
| Chrome        | Android Browser (Android 4.x+)              |
| Firefox       | Safari (iOS 7)                              |
| Safari (Mac)  | Internet Explorer Mobile (Windows Phone 8)  |

##Version History

1.1.2

- Do not cache pushy triggers

1.1.1

- Add active classes to the html tag

1.1.0

- Allow left/right on the same site.
- Data params to configure direction of pushy items.
- Allow multiple buttons.
- Fallback overlaps instead of pushes to save performance.
- Cleaned up JS. now caches elements for performance.
- Stripped out pushy submenu so as not to force a specific type of content

0.9.2

- Removed modernizr dependency.
- Updated site overlay with color + smoother transition.
- Cleaned up the CSS a bit.
- Dropped support for IE 7 & 8.

0.9.1

- Added support for more menu items (with scroll bar).
- Added the .push CSS class. This adds pushy support to additional HTML elements outside of the container div.
- Fixed menu transition.
- Tested in iOS 7.
- Updated the demo file.

0.9.0

- Added a site overlay when Pushy is toggled
- Fixed horizonal scroll bar issue on mobile devices
- Disabled webkit tap highlight
- Rejiggered the JS file
- Updated to jQuery 1.10.1
- Updated the demo file

0.8.4

- Fixed performance issue with mobile devices
- Updated to jQuery 1.10
- Updated the demo file
- Updated the read me