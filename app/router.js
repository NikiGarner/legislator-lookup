import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results',{path: '/results/:zip'});
  this.route('committee', {path: '/committee/:chamber'});
  this.route('subcommittee', {path: '/subcommittee/:committee_id'});
  this.route('bills');
  this.route('bills-by-id', {path: '/bills-by-id/:bill_id'});
  this.route('upcoming-bill', {path: '/upcoming-bill/:chamber'});
});

export default Router;
