import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('vehicle');
  },

  actions: {
    handleVehicleClick(vehicleId) {
      this.transitionTo('vehicle', vehicleId);
    }
  }
});
