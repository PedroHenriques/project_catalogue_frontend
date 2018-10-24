'use strict';
import * as React from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from './Footer';

export default class App extends React.Component<{}, {}> {
  render() {
    return(
      <div id='app'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}