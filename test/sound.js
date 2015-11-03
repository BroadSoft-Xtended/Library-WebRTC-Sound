test = require('bdsft-sdk-test').model;
describe('sound', function() {

  beforeEach(function() {
    test.createModelAndView('sound', {
        sound: require('../'),
        eventbus: require('bdsft-sdk-eventbus'),
        debug: require('bdsft-sdk-debug')
    });
    eventbus = global.bdsft_client_instances.test.eventbus.eventbus;
  });

  it('incoming call and playClick', function() {
    eventbus.progress();
    sound.playClick();
  });
});