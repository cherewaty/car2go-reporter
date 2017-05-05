import ApplicationAdapter from './application';
import DS from 'ember-data';
import ENV from '../config/environment';

export default ApplicationAdapter.extend(DS.BuildURLMixin, {
  urlForFindAll(modelName) {
    return this.buildURL(modelName) + '?loc=austin&format=json&oauth_consumer_key='+ENV.APP.OAUTH_CONSUMER_KEY;
  }
});
