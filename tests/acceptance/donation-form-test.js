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

// test('should donate with complete information', (assert) => {
//   visit('/');
//   fillIn('input.demo', 'Khanh Hoang');
//   fillIn('input[name="amount"]', '23');
//   find('input[type="checkbox"]').prop('checked', true);
//   click('input[type="button"]');

//   andThen(() => {
//     assert.equal(find('span:contains("Donation Completed!")').length, 1,
//       'should show "Donation Completed!"');

//     assert.equal(find('.demo').text(), 'Khanh Hoang',
//       'should clear name input after submit');
//   });
// });

// test('should not submit without filling in any information', assert => {
//   visit('/');
//   click('input[type="button"]');

//   andThen(() => {
//     assert.equal(find('span:contains("Donation Completed!")').length, 0,
//       'should not show "Donation Completed!"');

//     assert.equal(find(':contains("Please enter your name")').length, 1,
//       'should show "Please enter your name"');

//     assert.equal(find(':contains("Please enter your amount paid")').length, 1,
//       'should show "Please enter your amount paid"');

//     assert.equal(find(':contains("You must agree to the Terms and Conditions")').length, 1,
//       'should show "You must agree to the Terms and Conditions"');
//   });
// });

// test('should not submit with invalid amount paid', assert => {
//   visit('/');
//   fillIn('input[name="name"]', 'Khanh Hoang');
//   fillIn('input[name="amount"]', 'abc');
//   find('input[type="checkbox"]').prop('checked', true);
//   click('input[type="button"]');

//   andThen(() => {
//     assert.equal(find('span:contains("Donation Completed!")').length, 0,
//       'should not show "Donation Completed!"');

//     assert.equal(find(':contains("Please enter valid amount paid")').length, 1,
//       'should show "Please enter valid amount paid"');
//   });
// });

// test('should not submit with name is lower than 5 characters', assert => {
//   visit('/');
//   fillIn('input[name="name"]', 'dem');
//   fillIn('input[name="amount"]', 'abc');
//   click('input[type="button"]');

//   andThen(() => {
//     assert.equal(find('span:contains("Donation Completed!")').length, 0,
//       'should not show "Donation Completed!"');

//     assert.equal(find(':contains("Your name must be at least 5 characters")').length, 1,
//       'should show "Your name must be at least 5 characters"');
//   });
// });
