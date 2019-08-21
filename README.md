# Angular Web Component Template
This repo is meant to be a template for uPortal Angular web components.

# Local Development

Install dependencies with `npm install`

Run local server with `npm run serve:element`

# Building

Build the element into a single JavaScript file with `npm run build-element`. A single file
will be generated in `element/element.js`. This build path can be changed in `build-elements.js`

# Creating a web component

`title`: The title of the web component.
`uid`: The unique ID of the card.
`icon`: The Font Awesome name of the font.
`url`: The URL to open when the card is clicked.
`newtab`: `true` or `false` if the window should open in a new tab.
