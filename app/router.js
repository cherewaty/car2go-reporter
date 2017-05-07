import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vehicle', { path: '/vehicles/:vehicle_id' }, function() {
    this.route('report');
    this.route('report-success');
  });
});

export default Router;
