# Web GIS Components

[![Greenkeeper badge](https://badges.greenkeeper.io/Zodiase/Web-GIS-Components.svg)](https://greenkeeper.io/)

This project uses [Web Components Technology](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to build a suite of reusable components that can be used as the fundation of Web GIS applications.

See `Developer.md` for implementation decisions and details.

See `Roadmap.md` for upcoming features.

## Demo

Checkout the online version at: [zodiase.github.io/Web-GIS-Components/demo](https://zodiase.github.io/Web-GIS-Components/demo/)

The `docs/demo` directory contains demo pages for various example usages. Run `npm run demo` to launch the demo site at `localhost:5000`.

But before the demo site is usable, the project distribution files have to be built first.

## Building

Run `npm install && npm run build` to build the distribution files to `dist` directory.

## Dependencies

This library requires browser support for [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) and [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM).

It also requires `native-shim` [available here](https://github.com/webcomponents/custom-elements/blob/master/src/native-shim.js) to allow use of Custom Elements in transpiled ES5 code.

The polyfills are already bundled in `web-gis-components.js`. Use `web-gis-components-lite.js` if the polyfills are provided separately.

## Versions

This project follows [Semantic Versioning](http://semver.org/). See `History.md` for release changes.
