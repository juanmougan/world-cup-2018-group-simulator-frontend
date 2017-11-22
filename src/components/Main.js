require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends Component {
  render() {
    return (
      <div className="index">
        <Groups />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
