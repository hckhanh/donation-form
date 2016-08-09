import Ember from 'ember';
import { donor } from 'donation-form/helpers/donor';
import { module, test } from 'qunit';

module('Unit | Helper | donor');

test('should print the username of the donation owner', (assert) => {
  const stubDonation = Ember.Object.create({
    amount: 120,
    createdAt: 1470660009806,
    userId: 'UmhkV31KkGdigX4XvoQ8E87Jp1k2',
    username: 'Khanh Hoang'
  });

  const result = donor([
    stubDonation,
    'data-position="top left" data-inverted=""'
  ]);

  assert.ok(result);
});
