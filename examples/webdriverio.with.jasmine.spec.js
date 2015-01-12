var webdriverio = require('../index');

console.info('Found jasmine example spec.');

describe('my webdriverio tests', function() {

    var client = {};
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999;

    beforeEach(function() {
        client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('test it', function(done) {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                expect(err).toBeFalsy();
                expect(result.height).toBe(26);
                expect(result.width).toBe(37);
            })
            .getTitle(function(err, title) {
                expect(err).toBeFalsy();
                expect(title).toBe('GitHub · Build software better, together.');
            })
            .getCssProperty('a[href="/plans"]', 'color', function(err, color){
                expect(err).toBeFalsy();
                expect(color).toBe('rgba(65,131,196,1)');
            })
            .call(done);
    });

    it('test it 2', function(done) {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                expect(err).toBeFalsy();
                expect(result.height).toBe(26);
                expect(result.width).toBe(37);
            })
            .getTitle(function(err, title) {
                expect(err).toBeFalsy();
                expect(title).toBe('GitHub · Build software better, together.');
            })
            .getCssProperty('a[href="/plans"]', 'color', function(err, color){
                expect(err).toBeFalsy();
                expect(color).toBe('rgba(65,131,196,1)');
            })
            .call(done);
    });

    it('test it 3', function(done) {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                expect(err).toBeFalsy();
                expect(result.height).toBe(26);
                expect(result.width).toBe(37);
            })
            .getTitle(function(err, title) {
                expect(err).toBeFalsy();
                expect(title).toBe('GitHub · Build software better, together.');
            })
            .getCssProperty('a[href="/plans"]', 'color', function(err, color){
                expect(err).toBeFalsy();
                expect(color).toBe('rgba(65,131,196,1)');
            })
            .call(done);
    });

    it('test it 4', function(done) {
        console.info('test 4');
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                expect(err).toBeFalsy();
                expect(result.height).toBe(26);
                expect(result.width).toBe(37);
            })
            .getTitle(function(err, title) {
                expect(err).toBeFalsy();
                expect(title).toBe('GitHub · Build software better, together.');
            })
            .getCssProperty('a[href="/plans"]', 'color', function(err, color){
                expect(err).toBeFalsy();
                expect(color).toBe('rgba(65,131,196,1)');
            })
            .call(done);
    });

    afterEach(function(done) {
        client.end(done);
    });
});
