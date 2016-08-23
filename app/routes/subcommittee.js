import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&parent_committee_id=' + params.committee_id + "&per_page=all";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
