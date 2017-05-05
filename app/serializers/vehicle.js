import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  modelNameFromPayloadKey() {
    return this._super('vehicle');
  },

  extractId(modelClass, resourceHash) {
    return resourceHash.vin;
  }
});
