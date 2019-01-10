# React UI Showcase

This project is a fork of [React Bluekit](https://github.com/blueberryapps/react-bluekit)

## React BlueKit [![CircleCI](https://circleci.com/gh/blueberryapps/react-bluekit/tree/master.svg?style=svg)](https://circleci.com/gh/blueberryapps/react-bluekit/tree/master) [![Dependency Status](https://dependencyci.com/github/blueberryapps/react-bluekit/badge)](https://dependencyci.com/github/blueberryapps/react-bluekit)

![BlueKit usage](http://bb-share.s3.amazonaws.com/BlueKit_usage.gif)

BlueKit automatically generates a library from your React components with editable props and live preview.

Point BlueKit to folders with your React components and it will generate a library for you. You'll be able to browse through the components, tweak their props, and see the changes live. Furthermore, any changes that you make to your components' code will be reflected in the library.

DEMO here: [http://bluekit.blueberry.io](http://bluekit.blueberry.io)

## Install

```sh
$ npm install --save loveholidays/react-ui-showcase
```

You can use react-ui-showcase via npm script

## Npm script
```js
"scripts": {
  "ui:showcase": "react-ui-showcase --baseDir ./components --paths . --exclude \"./(Layout|StyledComponent).tsx\""
}
```

## Add it to your project

Look at the `example` directory, you only need to add:

```js
import BlueKit from 'react-ui-showcase';
import componentsIndex from '../componentsIndex';
import React, { Component } from 'react';

export default class PageWithBlueKit extends Component {
  render() {
    return (
      <BlueKit
        componentsIndex={componentsIndex}

        // display inline (not full page)
        inline

        // this name is used for bluekit local storage as namespace
        // it is optional
        name="MyProjectName"
      />
    );
  }
}
```
You can also pass `children` to BlueKit, which will be displayed above the search field (e.g. for themes or other stuff).

To add jsdoc **descriptions** see example [example_components/Checkbox.react.js](https://github.com/blueberryapps/react-bluekit/blob/master/example_components/Checkbox.react.js).

## Typescript support

Bluekit automatically finds `.tsx` files and uses [react-docgen-typescript](https://github.com/imtoo/react-docgen-typescript) parser for it.

## BlueKit development
```
npm install
cd ./example
npm install
gulp
open http://localhost:3000
```
This will start the development server and then you can play with components in BlueKit.

### Gulp tasks
```
# generate svg icons from src/icons directory
gulp svg-icon

# run unit tests
gulp ava

# run eslint
gulp eslint
```

## Additional info

BlueKit automatically hides props that don’t affect the component’s look.

If you get some kind of weird error and BlueKit doesn't load at all, try to reset localStorage by running `localStorage.clear();`.

## Made by
[LoveHolidays](https://www.loveholidays.com)
[Blueberry](https://www.blueberry.io)
