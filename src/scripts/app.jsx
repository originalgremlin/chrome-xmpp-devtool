"use strict";

var React = require('react'),
    Panel = require('./components/panel');

window.addEventListener('load', function () {
    React.render(<Panel />, document.body);
}, false)
