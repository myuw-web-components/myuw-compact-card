# MyUW Compact Card
This is a compact card web component used with MyUW.

![Screenshot showing an example of a compact card](compact-card.png "Compact Card")

# Using

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

## Configurable properties
`title`: The title of the web component.

`uid`: The unique ID of the card.

`md-icon`: Material UI icon name.

`fa-icon`: Font Awesome icon name.

`svg-icon`: A relative SVG icon URL.

`url`: The URL to open when the card is clicked. If the URL starts with `http` or `https`
the link will open in a new tab. If it is relative it will open in the same tab.

## Removing Card

When the remove card button is clicked a `deleteCardNotify` event is fired where `event.detail`
as the UID of the card.

```javascript
  const el = document.getElementById('my-card');
  el.addEventListener('deleteCardNotify', event => {
    console.log(event.detail);
  });
```

## Nuances

+ Ignores `fa-icon` attribute when its value includes `{`.
  This is so that an AngularJS application can naively invoke this web component
  feeding the `fa-icon` attribute an AngularJS expression, with this web
  component ignoring the attribute until the AngularJS expression resolves.
  Without this bit of complexity, 
  `FontAwesome: Could not find icon with iconName={{widget.faIcon |`
  littered the logs where `uPortal-app-framework` uses this web component.

# Local Development

Install dependencies with `npm install`

Run local server with `npm run serve:element`

# Building

Build the element into a single JavaScript file with `npm run build-element`. A single file
will be generated in `element/element.js`. This build path can be changed in `build-elements.js`
