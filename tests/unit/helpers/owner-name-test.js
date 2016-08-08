import Ember from 'ember';
import { ownerName } from 'donation-form/helpers/owner-name';
import { module, test } from 'qunit';

module('Unit | Helper | owner name');

test('should print the username of the other donation owner', (assert) => {
  const stubDonation = Ember.Object.create({
    amount: 120,
    createdAt: 1470660009806,
    userId: 'b3db8dc1-4017-46b1-adaf-171016630d6a',
    username: 'Khanh Hoang 2'
  });

  const result = ownerName(['b3db8dc1-4017-46e1-adaf-17101a530d6a', stubDonation]);

  assert.equal(result, '<a class="user">Khanh Hoang 2</a>');
});

test('should print "You" of the same donation owner', (assert) => {
  const stubDonation = Ember.Object.create({
    amount: 123,
    createdAt: 1470651109806,
    userId: 'b3db8dc1-4017-46e1-adaf-17101a530d6a',
    username: 'Khanh Hoang'
  });

  const result = ownerName(['b3db8dc1-4017-46e1-adaf-17101a530d6a', stubDonation]);

  assert.equal(result, 'You');
});
