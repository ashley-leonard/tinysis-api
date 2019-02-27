# tinysis-ui

This is the UI client meant to supercede a Rails 1.x front-end implementation
for the Alternative Learning Environment (ALE) tracking application,
[tinysis](github://artzte/tinysis).

This client, written in [EmberJS](https://emberjs.com), consumes API feeds
from a [Rails API server](github://artzte/tinysis-api). These API feeds are served
using REST and JSONAPI.

The intent of this client implementation is to keep it as light and simple as
possible. Its data flows are handled internally using lean plain-JSON models
stored in a central JSONAPI resource.

## Internal data flows

Follow these conventions:

* The model of the page is the raw, root API response. In the case of multi-resource
  fetches performed within the model hook, the model would be the resolved
  array from same
* The controller should be populated with semantically logical names such as
  "enrollments" or "contract". These semantically named variables should point
  to the actual data resource, i.e. the data attribute of the JSONAPI response.
* Components should lean on the tinyData store to retrieve sideloaded related entities.
  each route should populate all data needed by the page. In most cases the data fetch
  will block rendering, so components can synchronously retrieve the related data
  items from the store.
* In some cases, lazy loading might occur, which is fine... in this case the affected
  components need to guard against loading states.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone github://artzte/tinysis-ui`
* `cd tinysis-ui`
* `npm install`

## Running / Development

* `npm start`
* Visit your app at [http://localhost:3100](http://localhost:3100).
* Visit your tests at [http://localhost:3100/tests](http://localhost:3100/tests)

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* Run the test suite using `npm test`
* Run the full build checks using `npm run pr`

### Linting

This project uses a customized linting scheme leaning on 
[airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and 
[ember-cli-eslint](https://www.npmjs.com/package/ember-cli-eslint)

* Run the linter using `npm run lint` or `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### SVG generation for assignments table

I abandoned this approach when I realized I could just generate
the tags using handlebars. but SVG.js was very useful in prototyping.

    didInsertElement() 
      const svgContainer = this.element.children[0];
      const draw = SVG(svgContainer)
      const name = this.assignment.attributes.name
      const label = name;

      draw
        .rect(20, 200)
        .fill('#eee');
      draw
        .text(label)
        .y(195)
        .x(10)
        .font({
          family: 'Roboto',
          size: 12,
          weight: 300,
          'writing-mode': 'tb',
          'text-anchor': 'end'
          
        })
        .transform( { rotation: 180 });
    },
