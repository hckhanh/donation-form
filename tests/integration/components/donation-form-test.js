import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('donation-form', 'Integration | Component | donation form', {
  integration: true
});

test('should submit donation with valid information', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('.field input[name="name"]').text("Khanh Hoang");
  this.$('.field input[name="amount"]').text("120");
  this.$('.field input[name="terms"]').prop('checked', true);

  this.$('div.ui.button').click();

  assert.equal(this.$('.field input[name="name"]').text(), '',
    'should clear name field');

  assert.equal(this.$('.field input[name="amount"]').text(), '',
    'should clear amount paid');

  assert.equal(this.$('.field input[name="terms"]').prop('checked'), false,
    'should uncheck terms field');

  assert.equal(this.$('.ui.success.message').length, 1,
    'should show success message');
});

test('should not submit without filling in any information', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('div.ui.button').click();

  assert.equal(this.$('.ui.success.message').length, 0,
    'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Please enter your name")').length, 1,
    'should show message: "Please enter your name"');

  assert.equal(this.$('div.ui.red:contains("Please enter your amount paid")').length, 1,
    'should show message: "Please enter your amount paid"');

  assert.equal(this.$('div.ui.red:contains("You must agree to the Terms and Conditions")').length, 1,
    'should show message: "You must agree to the Terms and Conditions"');
});

test('should not submit with invalid amount paid', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('.field input[name="name"]').text("Khanh Hoang");
  this.$('.field input[name="amount"]').text("12..2");
  this.$('.field input[name="terms"]').prop('checked', true);

  this.$('div.ui.button').click();

  assert.equal(this.$('.ui.success.message').length, 0,
    'should not show success message');
});

test('should not submit with name is lower than 5 characters', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('.field input[name="name"]').text("Name");
  this.$('.field input[name="amount"]').text("120");
  this.$('.field input[name="terms"]').prop('checked', true);

  this.$('div.ui.button').click();

  assert.equal(this.$('.ui.success.message').length, 0,
    'should not show success message');
});
