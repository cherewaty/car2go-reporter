import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://www.car2go.com',
  namespace: 'api/v2.1'
});
