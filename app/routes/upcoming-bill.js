import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?apikey=' +key+ '&order=scheduled_at&chamber=' +  params.chamber + "&per_page=all";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
