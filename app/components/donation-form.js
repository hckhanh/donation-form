import Ember from 'ember';
import config from 'donation-form/config/environment';

export default Ember.Component.extend({
  donationForm: null,
  successMsg: null,

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
    settings.data.imageIndex = Math.floor(Math.random() * 10);

    this
      .get('donationSubmit')(settings.data)
      .then((donation) => {
        this.set('username', donation.get('username'));
        this.set('amount', donation.get('amount'));

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
        .form('reset');
    }
  },

  isMessageVisible() {
    return this
      .get('successMsg')
      .transition('is visible');
  },

  toggleMessage() {
    this
      .get('successMsg')
      .transition('fade down');
  },

  actions: {
    handleCloseMessage() {
      this.toggleMessage();
    }
  }
});
