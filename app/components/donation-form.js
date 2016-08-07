import Ember from 'ember';
import config from 'donation-form/config/environment';

export default Ember.Component.extend({
  donationForm: null,
  successMsg: null,
  donations: Ember.inject.service(),
  session: Ember.inject.service(),

  didInsertElement() {
    this
      .$('#termsCheckbox')
      .checkbox();

    this
      .$('#termsTooltip')
      .popup({
        content: 'Just a demo form',
        position: 'bottom center',
        variation: 'inverted'
      });

    this.set('donationForm', this.$('#donationForm'));

    this
      .get('donationForm')
      .form({
        fields: config.APP.DONATION_FORM_RULES,
        inline: true,
        onFailure: this.handleFormFailure.bind(this)
      })
      .api({
        serializeForm: true,
        responseAsync: this.handleDonationResponse.bind(this),
        onSuccess: this.handleDonationSuccess.bind(this)
      });

    this.set('successMsg', this.$('#successMsg'));
  },

  handleFormFailure() {
    if (this.isMessageVisible()) {
      this.toggleMessage();
    }

    return false;
  },

  handleDonationResponse(settings, callback) {
    this
      .get('donations')
      .add(settings.data)
      .then((donation) => {
        this.set('username', donation.get('username'));
        this.set('amount',  donation.get('amount'));

        callback({ success: true });
      })
      .catch((error) => {
        console.error(error);
        callback({ success: false });
      });
  },

  handleDonationSuccess() {
    if (!this.isDestroyed) {
      if (!this.isMessageVisible()) {
        this.toggleMessage();
      }

      this
        .get('donationForm')
        .form('clear');
    }
  },

  isMessageVisible() {
    return this.get('successMsg').transition('is visible');
  },

  toggleMessage() {
    this.get('successMsg').transition('fade down');
  },

  actions: {
    handleCloseMessage() {
      this.toggleMessage();
    }
  }
});
