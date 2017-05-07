import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitReport(reportType) {
      this.get('onSubmitReport')(this.get('vehicle'), reportType);
    }
  }
});
