"use strict";

var onCreate = function (panel) {
    chrome.runtime.sendMessage({ type: "log", obj: panel });
    panel.onShown(function () {
        chrome.runtime.sendMessage({ type: "log", obj: arguments });
    });
};

chrome.devtools.panels.create('XMPP', 'assets/icons/48x48.png', 'panel.html', onCreate);
