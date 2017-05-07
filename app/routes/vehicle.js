import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').peekRecord('vehicle', params.vehicle_id);
  },

  actions: {
    sendReport(vehicle) {
      this.transitionTo('vehicle.report-success', vehicle.get('id'));
    }
  }
});
