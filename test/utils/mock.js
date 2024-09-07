module.exports = mock;

function mock() {
  if (!global.window) {
    const { Window } = require('happy-dom');
    global.window = new Window();
    window.indexedDB = require('fake-indexeddb').default;
  }
  const fetch = require('cross-fetch');
  global.fetch = fetch;
}