import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' +key+  '&history.active=true&order=last_action_at';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
