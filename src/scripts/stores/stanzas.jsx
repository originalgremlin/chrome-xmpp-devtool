"use strict";

var Constants = require('../constants'),
    Dispatcher = require('../dispatcher'),
    EventEmitter = require('events').EventEmitter,
    uuid = require('uuid'),
    _ = require('lodash');

var data = {};

var Store = _.assign({}, EventEmitter.prototype, {
    // events
    emitChange: function (id) {
        this.emit(Constants.Events.NEW_STANZA, id);
    },

    addChangeListener: function (callback) {
        this.addListener(Constants.Events.NEW_STANZA, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(Constants.Events.NEW_STANZA, callback);
    },

    // access
    getStanza: function (id) {
        return data[id];
    },

    getStanzas: function () {
        return _.sortBy(_.values(data), 'date');
    }
});

Dispatcher.register(function (action) {
    switch (action.type) {
        case Constants.Actions.INJECT_STANZA:
            var body = action.stanza,
                date = new Date(),
                id = uuid.v4();
            data[id] = {
                body: body,
                date: date,
                id: id
            };
            Store.emitChange(id);
            break;

        default:
            break;
    }
});

module.exports = Store;