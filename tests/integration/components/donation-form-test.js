import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('donation-form', 'Integration | Component | donation form', {
  integration: true
});

const initialStubsAndRender = (test) => {
  test.set('uid', 'b3db8dc1-4017-46e1-adaf-17101a530d6a');
  test.on('handleDonationSubmit', () => {
    return Ember.RSVP.resolve(Ember.Object.create({
      amount: 123,
      createdAt: 1470651109806,
      userId: 'b3db8dc1-4017-46e1-adaf-17101a530d6a',
      username: 'Khanh Hoang'
    }));
  });

  test.render(hbs`{{donation-form uid=uid donationSubmit=(action "handleDonationSubmit")}}`);
};

test('should submit donation with valid information', function (assert) {
  initialStubsAndRender(this);

  this.$('#donationForm').form('set value', 'username', 'Khanh Hoang');
  this.$('#donationForm').form('set value', 'amount', 120);
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  assert.ok(this.$('#donationForm').form('is valid'), 'form validation is success');

  assert.ok(this.$('#donationForm').api('was successful'), 'api request is success');
});

test('should not submit without filling any information', function (assert) {
  initialStubsAndRender(this);

  this.$('#donationForm').form('submit');

  assert.notOk(this.$('#donationForm').form('is valid'), 'form validation is failed');
});

test('should not submit with invalid amount paid', function (assert) {
  initialStubsAndRender(this);

  this.$('#donationForm').form('set value', 'username', 'Khanh Hoang');
  this.$('#donationForm').form('set value', 'amount', '12..0');
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  assert.notOk(this.$('#donationForm').form('is valid'), 'form validation is failed');
});

test('should not submit with non-positive amount paid', function (assert) {
  initialStubsAndRender(this);

  this.$('#donationForm').form('set value', 'username', 'Khanh Hoang');
  this.$('#donationForm').form('set value', 'amount', -120);
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  assert.notOk(this.$('#donationForm').form('is valid'), 'form validation is failed');
});

test('should not submit with name is lower than 5 characters', function (assert) {
  initialStubsAndRender(this);

  this.$('#donationForm').form('set value', 'username', 'Khan');
  this.$('#donationForm').form('set value', 'amount', 120);
  this.$('#donationForm').form('set value', 'terms', true);

  this.$('#donationForm').form('submit');

  assert.notOk(this.$('#donationForm').form('is valid'), 'form validation is failed');
});

test('should have the hidden userId field', function (assert) {
  initialStubsAndRender(this);

  const uid = this.get('uid');

  assert.equal(this.$('#donationForm input:hidden[name="userId"]').val(), uid,
   'should be the user id');
});
