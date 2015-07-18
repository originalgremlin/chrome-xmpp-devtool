"use strict";

var React = require('React'),
    _ = require('lodash');

var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel">
                <Injector />
                <Stanzas />
            </div>
        );
    }
});

module.exports = Panel;
