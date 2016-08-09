import Ember from 'ember';
import config from 'donation-form/config/environment';

export function donationImage([imageIndex]) {
  return Ember.String.htmlSafe(config.APP.DONATION_IMAGES[imageIndex]);
}

export default Ember.Helper.helper(donationImage);
