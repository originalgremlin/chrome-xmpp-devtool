"use strict";

chrome.runtime.onMessage.addListener(function(message, sender, response) {
    switch (message.type) {
        case "log":
            console.log(message.obj);
            break;
        default:
            break;
    }
    return true;
});
