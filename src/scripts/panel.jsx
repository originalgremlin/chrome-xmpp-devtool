"use strict";

var React = require('React'),
    utils = require('./utils');

var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel">this is a panel from react</div>
        );
    }
});

module.exports = Panel;