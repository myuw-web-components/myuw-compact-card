# MyUW Compact Card

This is a compact card web component used with MyUW.

![Screenshot showing an example of a compact card](compact-card.png "Compact Card")

## Using

Add the following to your page's `<head>`:
```html
<script src="https://unpkg.com/@myuw-web-components/myuw-compact-card@^1"></script>
```

Using the component 
```javascript
  <myuw-compact-card
    title="My Account"
    uid="unique-identifier"
    url="/star"
    md-icon="account_circle"
  >
  </myuw-compact-card>
```

## Element attributes

Required:

+ `title`: The title of the content represented by the card.
  Example: "Search the Library Catalog"
+ `uid`: The unique ID of the card.
  For current MyUW content, this is the `fname`.
  Example: "madison-library-catalog"
+ `url`: The URL to open when the card is clicked. If the URL starts with `http`
  or `https` the link will open in a new tab. If it is relative it will open in
  the same tab.

Set up to one of:

+ `md-icon`: [Material UI icon][] name.
  Example: `account_balance_wallet`
+ `fa-icon`: [Font Awesome icon][] name.
  Example: `font-awesome` . Note these values do *not* have the `fa-` prefix.
+ `svg-icon`: URL to an SVG file to use as icon
  Example: `/images/widgetIcons/linkedin-logo.svg`

If none of these are set, `myuw-compact-card` shows a default icon.

### Removing Card

`myuw-compact-card`s have a contextual menu with a delete menu item. When users
attempt to delete the card, this web component fires a custom `deleteCardNotify`
**DOM event** on the `myuw-compact-card` element where `event.detail` is the UID
of the card.

This event is both `bubbles` and `composed` so it will bubble up into the parent
document (beyond this web component's shadow DOM).

Handling that event to actually delete the card is an exercise left to the
implementer.

```javascript
  const el = document.getElementById('my-card');
  el.addEventListener('deleteCardNotify', event => {
    console.log(event.detail);
  });
```

### Nuances

+ Ignores `fa-icon` attribute when its value includes `{`.
  This is so that an AngularJS application can naively invoke this web component
  feeding the `fa-icon` attribute an AngularJS expression, with this web
  component ignoring the attribute until the AngularJS expression resolves.
  Without this bit of complexity, 
  `FontAwesome: Could not find icon with iconName={{widget.faIcon |`
  littered the logs where `uPortal-app-framework` uses this web component.
+ Likewise, ignores `svg-icon` attribute when its value includes `{`.
  This is likewise so that an AngularJS application can naively invoke this web
  component feeding the `svg-icon` attribute an AngularJS expression, with this
  web component ignoring the attribute until the AngularJS expression resolves.
  Without this bit of complexity,

```console
Error retrieving icon: Http failure response for .../web/%7B%7B::widget.iconUrl%7D%7D: 404 Not Found
```

## Local Development

Install dependencies with `npm install`

Run local server with `npm run serve:element`

## Releasing

**We're treating the 1.x series as unstable, so just bump the PATCH version and
don't worry about it.

### Building

Build the element into a single JavaScript file with

`npm run build-element`. 

A single file will be generated in `element/element.js`. This build path can be
changed in `build-elements.js`.

This compile step ensures that the `element.js` that will be used at runtime
by downstream applications matches the source code.

### Versioning

Bump the version number. We're not yet tracking breaking changes, so all
releases are patch releases.

`npm version patch`

### Publishing

`npm publish --access public`

[Material UI icon]: https://material.io/resources/icons/?style=baseline
[Font Awesome icon]: https://fontawesome.com/icons?d=gallery&m=free
