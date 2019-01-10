import React, {Component} from '../../node_modules/react';
import Showcase from '../../src';
import componentsIndex from './componentsIndex'; // eslint-disable-line

export default class App extends Component {
  render() {
    return <Showcase componentsIndex={componentsIndex} />;
  }
}
