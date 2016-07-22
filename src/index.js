import React from 'react';
import {render} from 'react-dom';
import App from 'components/app';

require('./scss/test.scss');

render (<App />, document.getElementById('app'));
