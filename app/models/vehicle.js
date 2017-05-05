import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr(),
  coordinates: DS.attr(),
  engineType: DS.attr(),
  exterior: DS.attr(),
  fuel: DS.attr(),
  interior: DS.attr(),
  name: DS.attr(),
  smartPhoneRequired: DS.attr(),
  vin: DS.attr()
});
