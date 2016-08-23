import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=8fd1ddf1d17947b0abf1791bbcffb577&bill_id=' + params.bill_id  + "&per_page=all";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results)
      return responseJSON.results;
    });
  }
});
