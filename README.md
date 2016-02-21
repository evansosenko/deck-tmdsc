# Superconducting Phases of Monolayer TMDs

[![GitHub release](https://img.shields.io/github/release/evansosenko/deck-tmdsc.svg)](https://github.com/evansosenko/deck-tmdsc/releases)
[![GitHub license](https://img.shields.io/badge/license-CC--BY--SA--4.0-blue.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/evansosenko/deck-tmdsc.svg)](https://david-dm.org/evansosenko/deck-tmdsc)
[![David](https://img.shields.io/david/dev/evansosenko/deck-tmdsc.svg)](https://david-dm.org/evansosenko/deck-tmdsc#info=devDependencies)
[![Travis](https://img.shields.io/travis/evansosenko/deck-tmdsc.svg)](https://travis-ci.org/evansosenko/deck-tmdsc)

> Built from [makenew/deck-bespoke.js](https://github.com/makenew/deck-bespoke.js).

## Description

Superconducting phases of monolayer transition-metal dichalcogenides. Contributed Talk, 2016 APS March Meeting.

## Quickstart

```
$ git clone https://github.com/evansosenko/deck-tmdsc.git
$ cd deck-tmdsc
$ npm install
$ npm start
```

## Building and Development

### Source Code

The [deck-tmdsc source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/evansosenko/deck-tmdsc.git
```

[deck-tmdsc source]: https://github.com/evansosenko/deck-tmdsc

### Requirements

You will need [Node.js] with [npm].

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/

#### Updating requirements

Requirements are version-locked to ensure consistent deploys.

To use the newest allowed Node packages,
or after updating any package versions in `package.json`,
update and stage `npm-shrinkwrap.json` with

```
$ npm update
$ npm shrinkwrap --dev
$ git add npm-shrinkwrap.json
```

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run-script`.
View them with

```
$ npm run
```

#### Brunch

[Brunch] is responsible for the development cycle
and the production build.

Start a local Brunch development server with

```
$ npm start
```

Run tests and generate and the production build to `public` with

```
$ npm run dist
```

If installed globally, `brunch` may be invoked directly.
View available commands with

```
$ brunch
```

#### gulp

Linting and deployment is handled by [gulp].

In a separate window, use gulp to watch for changes
and lint JavaScript and Sass files with

```
$ npm run lint:watch
```

If installed globally, `gulp` may be invoked directly.
View available commands with

```
$ gulp --tasks
```

[Brunch]: http://brunch.io/
[gulp]: http://gulpjs.com/

#### HTMLMinifier

Minify all `.html` files in the `public` directory with

```
$ npm run minify
```

### Deploy to GitHub Pages

Deploy the `public` directory to GitHub Pages with

```
$ npm run deploy
```

This will minify the HTML before deployment.
Deploy the `public` directory as-is with

```
$ npm run gh-pages
```

If `SOURCE_BRANCH` is set as a Travis CI environment variable,
then commits pushed to that branch will be deployed automatically.
This requires `.travis/deploy.key.enc` to be encrypted on Travis,
the corresponding decryption command in `.travis/deploy.sh`, and
the corresponding public key added as a deploy key to the GitHub repository.

## Tips for Deck Makers

### Bespoke.js

The [Bespoke.js GitHub page] covers how to make a deck.

Put slides in `app/partials/slides.static.hbs`, e.g.,

```html
<section>Slide 1</section>
<section>Slide 2</section>
<section>Slide 3</section>
```

[Bespoke.js GitHub page]: https://github.com/bespokejs/bespoke

### Plugins, Themes, and Libraries

- Install plugins, themes, and any other front end dependencies,
  e.g., JavaScript modules, Sass libraries, fonts, etc.,
  with `npm i --save`.
- Use JavaScript modules directly with `import`.
- Bespoke.js is configured in `app/modules/deck.js`.
- The `node_modules` directory exists in the Sass include path
  via the setting in `brunch-config.coffee`.
- Use `app/styles/main.scss` as the entry point for your styles.
- All other assets may be placed under `app/assets`.
- Wrap asset paths referenced in your markup
  with `DIGEST` for cache busting support.

### Meta Data

Meta data is defined in `app/index.static.hbs`.

- Nil values are indicated by a `~`.
  Nil fields never generate a meta tag.
  Fields which are Nil by default are generally optional.
- The `image`, `audio`, and `video` fields must be given
  as a fully qualified url.
  Be careful that the asset actually exists, i.e., use a unique
  image file and not one passed through `DIGEST` elsewhere.
- Instead of the `video` field, you may specify a `youtube` video id.
- The `twitter` fields are used for [Twitter Cards], but you must
  enable them for your domain with Twitter first.

[Twitter Cards]: https://dev.twitter.com/cards/

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/evansosenko/deck-tmdsc/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
  <img alt="Creative Commons License"
       src= "https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
       style="border-width:0"></a><br>
<span>deck-bespoke.js</span> by
<a href="https://evansosenko.com/" rel="cc:attributionURL">
  Evan Sosenko
</a>
is licensed under a
<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
  Creative Commons Attribution-ShareAlike 4.0 International License
</a>.<br>
Based on a work at
<a href="https://github.com/evansosenko/deck-tmdsc"
   rel="dct:source">
   https://github.com/evansosenko/deck-tmdsc
</a>.

Some content may be licensed under other terms where noted.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
