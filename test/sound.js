test = require('../node_modules/webrtc-core/test/includes/common');
describe('sound', function() {

  beforeEach(function() {
    test.createModelAndView('sound', {
        sound: require('../')
    });
    eventbus = global.bdsft_client_instances.test.core.eventbus;
  });

  it('incoming call and playClick', function() {
    eventbus.progress();
    sound.playClick();
  });
});