import DS from 'ember-data';
import Ember from 'ember';
const { computed } = Ember;

export default DS.Model.extend({
  address: DS.attr(),
  coordinates: DS.attr(),
  engineType: DS.attr(),
  exterior: DS.attr(),
  fuel: DS.attr(),
  interior: DS.attr(),
  name: DS.attr(),
  smartPhoneRequired: DS.attr(),
  vin: DS.attr(),

  lat: computed('coordinates', function() {
    return this.get('coordinates')[1];
  }),

  lng: computed('coordinates', function() {
    return this.get('coordinates')[0];
  })
});
