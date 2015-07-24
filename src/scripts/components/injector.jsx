"use strict";

var React = require('React'),
    StanzaActions = require('../actions/stanzas'),
    _ = require('lodash');

var Injector = React.createClass({
    getInitialState: function () {
        return {
            stanza: ''
        };
    },

    render: function () {
        return (
            <textarea
                className="injector"
                onChange={ this.handleChange }
                onKeyPress={ this.handleKeyPress }
                value={ this.state.stanza }
            />
        );
    },

    handleChange: function (evt) {
        this.setState({
            stanza: evt.target.value
        });
    },

    handleKeyPress: function (evt) {
        var isShiftEnter = evt.shiftKey && (evt.charCode === 13),
            isValid = this.validate(this.state.stanza);
        if (isShiftEnter && isValid) {
            evt.preventDefault();
            StanzaActions.send(this.state.stanza);
            this.setState({ stanza: '' });
        }
    },

    validate: function (stanza) {
        // TODO: validate stanza xml
        return true;
    }
});

module.exports = Injector;