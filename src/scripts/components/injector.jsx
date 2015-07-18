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

    componentDidMount: function () {
        this.focus();
    },

    render: function () {
        return (
            <form className="injector" onSubmit={ this.handleSubmit }>
                <textarea ref="textarea" onChange={ this.handleChange } value={ this.state.stanza }></textarea>
            </form>
        );
    },

    handleChange: function (evt) {
        this.setState({
            stanza: evt.target.value
        });
    },

    handleSubmit: function (evt) {
        evt.preventDefault();
        if (this.validate(this.state.stanza)) {
            StanzaActions.inject(this.state.stanza);
        } else {
            // TODO: error message to user
        }
    },

    focus: function () {
        React.findDOMNode(this.refs.textarea).focus();
    },

    validate: function (stanza) {
        // TODO: validate stanza xml
        return true;
    }
});

module.exports = Injector;