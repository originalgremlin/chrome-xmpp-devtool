"use strict";

var utils = {
    log: function(obj) {
        if(chrome && chrome.runtime) {
            chrome.runtime.sendMessage({ type: "log", obj: obj });
        }
    }
};

module.exports = utils;