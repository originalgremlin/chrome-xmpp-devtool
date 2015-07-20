"use strict";

var React = require('react'),
    Panel = require('./components/panel'),
    utils = require('./utils');

window.addEventListener('load', function () {
    React.render(<Panel />, document.getElementById('panel'));
}, false)
