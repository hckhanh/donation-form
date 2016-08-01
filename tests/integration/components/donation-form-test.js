import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('donation-form', 'Integration | Component | donation form', {
  integration: true
});

test('should submit donation with valid information', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{donation-form}}`);

  this.$('.field input[name="name"]').text("Khanh Hoang");
  this.$('.field input[name="amount"]').text("120");
  this.$('.field input[name="terms"]').prop('checked', true);

  this.$('div.ui.button').click();

  assert.equal(this.$('.field input[name="name"]').text(), '',
    'name field must be clear');

  assert.equal(this.$('.field input[name="amount"]').text(), '',
    'amount paid field must be clear');

  assert.equal(this.$('.field input[name="terms"]').prop('checked'), false,
    'terms field must be unchecked');
});

test('should not submit without filling in any information', function (assert) {

});

test('should not submit with invalid amount paid', function (assert) {

});

test('should not submit with name is lower than 5 characters', function (assert) {

});
