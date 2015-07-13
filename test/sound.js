var jsdom = require('mocha-jsdom');
expect = require('expect');
jsdom({});

describe('sound', function() {

  beforeEach(function() {
    core = require('webrtc-core');
    testUA = core.testUA;
    testUA.createModelAndView('sound', {
        sound: require('../')
    });
    eventbus = global.bdsft_client_instances.test.eventbus;
  });

  it('incoming call and playClick', function() {
    eventbus.progress();
    sound.playClick();
  });
});