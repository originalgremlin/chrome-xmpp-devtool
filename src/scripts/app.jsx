"use strict";

var React = require('react'),
    Panel = require('./components/panel'),
    utils = require('./utils');

window.addEventListener('load', function () {
    utils.log('loaded', arguments);
    utils.log('loaded', Panel);
    utils.log('loaded', document);
    React.render(<Panel />, document.body);
}, false)
