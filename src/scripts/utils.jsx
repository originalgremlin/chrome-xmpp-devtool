"use strict";

var utils = {
    log: function() {
        if(chrome && chrome.runtime) {
            chrome.runtime.sendMessage({ type: "log", obj: arguments });
        }
    }
};

module.exports = utils;