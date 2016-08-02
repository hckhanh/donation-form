// import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import wait from 'ember-test-helpers/wait';

moduleForComponent('donation-form', 'Integration | Component | donation form', {
  integration: true
});

test('should submit donation with valid information', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('form').form('set value', 'name', 'Khanh Hoang');
  this.$('form').form('set value', 'amount', '120');
  this.$('form').form('set value', 'terms', true);

  this.$('form').form('submit');

  assert.equal(this.$('form.success').length, 1, 'should show success message');
});

test('should not submit without filling in any information', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('form').form('submit');

  assert.equal(this.$('form.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Please enter your name")').length, 1,
    'should show message: "Please enter your name"');

  assert.equal(this.$('div.ui.red:contains("Please enter your amount paid")').length, 1,
    'should show message: "Please enter your amount paid"');

  assert.equal(this.$('div.ui.red:contains("You must agree to the Terms and Conditions")').length, 1,
    'should show message: "You must agree to the Terms and Conditions"');
});

test('should not submit with invalid amount paid', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('form').form('set value', 'name', 'Khanh Hoang');
  this.$('form').form('set value', 'amount', '12..0');
  this.$('form').form('set value', 'terms', true);

  this.$('form').form('submit');

  assert.equal(this.$('form.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Please enter a valid amount paid")').length, 1,
    'should show message: "Please enter a valid amount paid"');
});

test('should not submit with non-positive amount paid', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('form').form('set value', 'name', 'Khanh Hoang');
  this.$('form').form('set value', 'amount', '-120');
  this.$('form').form('set value', 'terms', true);

  this.$('form').form('submit');

  assert.equal(this.$('form.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Please enter a positive amount paid")').length, 1,
    'should show message: "Please enter a positive amount paid"');
});

test('should not submit with name is lower than 5 characters', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('form').form('set value', 'name', 'Khan');
  this.$('form').form('set value', 'amount', '120');
  this.$('form').form('set value', 'terms', true);

  this.$('form').form('submit');

  assert.equal(this.$('form.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Your name must be at least 5 characters")').length, 1,
    'should show message: "Your name must be at least 5 characters"');
});
