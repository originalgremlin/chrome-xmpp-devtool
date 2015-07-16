"use strict";

var onCreate = function (panel) {
  // no-op
};

chrome.devtools.panels.create('XMPP', 'assets/icons/48x48.png', 'panel.html', onCreate);
