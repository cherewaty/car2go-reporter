import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vehicle-report', 'Integration | Component | vehicle report', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vehicle-report}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vehicle-report}}
      template block text
    {{/vehicle-report}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
