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

### Configurable properties

`title`: The title of the web component.

`uid`: The unique ID of the card.

`md-icon`: Material UI icon name.

`fa-icon`: Font Awesome icon name.

`svg-icon`: A relative SVG icon URL.

`url`: The URL to open when the card is clicked. If the URL starts with `http` or `https`
the link will open in a new tab. If it is relative it will open in the same tab.

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
