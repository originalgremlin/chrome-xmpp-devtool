"use strict";

var Constants = require('../constants'),
    Dispatcher = require('flux').Dispatcher;

var Stanzas = {
    inject: function (stanza) {
        Dispatcher.dispatch({
            type: Constants.Actions.INJECT_STANZA,
            stanza: stanza
        });
    }
};

module.exports = Stanzas;