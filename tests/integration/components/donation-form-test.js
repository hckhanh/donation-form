import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const StubDonationService = Ember.Service.extend({
  donations: [],

  add(donation) {
    donation.createdAt = new Date();
    this.get('donations').addObject(donation);

    return Ember.RSVP.resolve('sdfsdf');
  }
});

const StubSessionService = Ember.Service.extend({
  isAuthenticated: true,
  currentUser: {
    uid: 'b3db8dc1-4017-46e1-adaf-17101a530d6a'
  }
});

moduleForComponent('donation-form', 'Integration | Component | donation form', {
  integration: true,
  beforeEach() {
    this.register('service:donations', StubDonationService);
    this.inject.service('donations', { as: 'stubDonations' });

    this.register('service:session', StubSessionService);
    this.inject.service('session', { as: 'stubSession' });
  }
});

test('should submit donation with valid information', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('#donationForm').form('set value', 'username', 'Khanh Hoang');
  this.$('#donationForm').form('set value', 'amount', 120);
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  const donations = this.get('stubDonations.donations');

  assert.equal(donations.length, 1, 'show add donation to donations service');
});

test('should not submit without filling in any information', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('#donationForm').form('submit');

  assert.equal(this.$('#donationForm.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Please enter your name")').length, 1,
    'should show message: "Please enter your name"');

  assert.equal(this.$('div.ui.red:contains("Please enter your amount paid")').length, 1,
    'should show message: "Please enter your amount paid"');

  assert.equal(this.$('div.ui.red:contains("You must agree to the Terms and Conditions")').length, 1,
    'should show message: "You must agree to the Terms and Conditions"');
});

test('should not submit with invalid amount paid', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('#donationForm').form('set value', 'username', 'Khanh Hoang');
  this.$('#donationForm').form('set value', 'amount', '12..0');
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  assert.equal(this.$('#donationForm.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Please enter a valid amount paid")').length, 1,
    'should show message: "Please enter a valid amount paid"');
});

test('should not submit with non-positive amount paid', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('#donationForm').form('set value', 'username', 'Khanh Hoang');
  this.$('#donationForm').form('set value', 'amount', -120);
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  assert.equal(this.$('#donationForm.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Please enter a positive amount paid")').length, 1,
    'should show message: "Please enter a positive amount paid"');
});

test('should not submit with name is lower than 5 characters', function (assert) {
  this.render(hbs`{{donation-form}}`);

  this.$('#donationForm').form('set value', 'username', 'Khan');
  this.$('#donationForm').form('set value', 'amount', 120);
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  assert.equal(this.$('#donationForm.success').length, 0, 'should not show success message');

  assert.equal(this.$('div.ui.red:contains("Your name must be at least 5 characters")').length, 1,
    'should show message: "Your name must be at least 5 characters"');
});

test('should have the hidden userId field', function (assert) {
  this.render(hbs`{{donation-form}}`);

  const uid = this.get('stubSession.currentUser.uid');

  assert.equal(this.$('#donationForm input:hidden[name="userId"]').val(), uid, 'should be the user id');
});
