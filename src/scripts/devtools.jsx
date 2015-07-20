"use strict";

var onCreate = function (panel) {
    panel.onShown.addListener(onShown);
};

var onShown = function (panelWindow) {
    chrome.runtime.sendMessage({ type: 'log', obj: panelWindow.document.body });
};

chrome.devtools.panels.create('XMPP', 'assets/icons/48x48.png', 'panel.html', onCreate);
