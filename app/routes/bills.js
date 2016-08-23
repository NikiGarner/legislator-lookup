import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=8fd1ddf1d17947b0abf1791bbcffb577&history.active=true&order=last_action_at';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
