import { donationImage } from 'donation-form/helpers/donation-image';
import { module, test } from 'qunit';

module('Unit | Helper | donation image');

test('should render the random image from images list', function(assert) {
  let result = donationImage([Math.floor(Math.random() * 10)]);
  assert.ok(result);
});
