import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=8fd1ddf1d17947b0abf1791bbcffb577&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
