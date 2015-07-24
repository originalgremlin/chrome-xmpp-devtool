"use strict";

var React = require('React'),
    Injector = require('./injector'),
    Stanzas = require('./stanzas'),
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
