import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    committeeLookup(){
      var params = {
        chamber: this.get('chamber')
      };
      this.sendAction('committeeLookup', params);
    },
    billLookup(){
      var params = {
        chamber: this.get('bill')
      };
      this.sendAction('billLookup', params);
    }
  }
});
