import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=8fd1ddf1d17947b0abf1791bbcffb577&parent_committee_id=' + params.committee_id + "&per_page=all";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
