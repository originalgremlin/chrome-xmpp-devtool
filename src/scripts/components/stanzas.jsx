"use strict";

var React = require('React'),
    Stanza = require('./stanza'),
    StanzaStore = require('../stores/stanzas'),
    _ = require('lodash');

var Stanzas = React.createClass({
    getInitialState: function () {
        return {
            stanzas: StanzaStore.getStanzas()
        };
    },

    componentDidMount: function() {
        StanzaStore.addChangeListener(this.handleChange);
    },

    componentWillUnmount: function() {
        StanzaStore.removeChangeListener(this.handleChange);
    },

    render: function () {
        var stanzas = this.state.stanzas.map(function (item) {
            return <Stanza key={ item.id } { ...item } />
        });
        return (
            <ul className="stanzas">{ stanzas }</ul>
        );
    },

    handleChange: function (id) {
        this.setState({
            stanzas: StanzaStore.getStanzas()
        });
    }
});

module.exports = Stanzas;