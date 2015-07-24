"use strict";

var React = require('React'),
    _ = require('lodash');

var Stanza = React.createClass({
    propTypes: {
        body: React.PropTypes.string.isRequired,
        date: React.PropTypes.instanceOf(Date).isRequired
    },

    render: function () {
        // TODO: format and style body xml to be more readable
        return (
            <li className="stanza">
                <span className="date">{ this.props.date.toLocaleString() }</span>
                <span className="body">{ this.props.body }</span>
            </li>
        );
    }
});

module.exports = Stanza;