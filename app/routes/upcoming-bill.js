import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?apikey=8fd1ddf1d17947b0abf1791bbcffb577&order=scheduled_at&chamber=' +  params.chamber + "&per_page=all";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results)
      return responseJSON.results;
    });
  }
});
