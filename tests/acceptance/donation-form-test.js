import { test } from 'qunit';
import moduleForAcceptance from 'donation-form/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | donation form');

test('should Donation Form exist', assert => {
  visit('/');

  andThen(() => {
    assert.equal(find('h1.header')[0].firstChild.nodeValue.trim(), 'Donation Form',
      'should have the title');
  });
});

test('should show the version of the app', assert => {
  visit('/');

  andThen(() => {
    assert.equal(find('.black.button:contains("v1.0.0")').length, 1,
      'version tag must be "v1.0.0"');
  });
});
