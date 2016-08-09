import Ember from 'ember';
import { donor } from 'donation-form/helpers/donor';
import { module, test } from 'qunit';

module('Unit | Helper | donor');

test('should print the username of the donation owner', (assert) => {
  const stubDonation = Ember.Object.create({
    amount: 120,
    createdAt: 1470660009806,
    userId: 'b3db8dc1-4017-46b1-adaf-171016630d6a',
    username: 'Khanh Hoang'
  });

  const result = donor([
    stubDonation,
    'data-position="top left" data-inverted=""'
  ]);

  assert.ok(result);
});
