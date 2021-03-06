/**
 *
 * Set the amount of time, in milliseconds, that asynchronous scripts executed
 * by /session/:sessionId/execute_async are permitted to run before they are
 * aborted and a |Timeout| error is returned to the client.
 *
 * @see https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/timeouts/async_script
 *
 * @param {Number} ms   The amount of time, in milliseconds, that time-limited commands are permitted to run.
 * @type protocol
 *
 */

var ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function timeoutsAsyncScript (ms) {

    /*!
     * make sure that callback contains chainit callback
     */
    var callback = arguments[arguments.length - 1];

    /*!
     * parameter check
     */
    if(typeof ms !== 'number') {
        return callback(new ErrorHandler.ProtocolError('number or type of arguments don\'t agree with timeoutsAsyncScript protocol command'));
    }

    this.requestHandler.create(
        '/session/:sessionId/timeouts/async_script',
        { ms: ms },
        callback
    );
};