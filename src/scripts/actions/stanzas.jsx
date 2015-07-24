"use strict";

var Constants = require('../constants'),
    Dispatcher = require('../dispatcher');

var Stanzas = {
    send: function (stanza) {
        Dispatcher.dispatch({
            type: Constants.Actions.INJECT_STANZA,
            stanza: stanza
        });
    }
};

module.exports = Stanzas;