import Ember from 'ember';
import config from 'donation-form/config/environment';

export default Ember.Component.extend({
  successMsg: null,
  donations: Ember.inject.service(),

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

    const donationForm = this.$('#donationForm');

    donationForm
      .form({
        fields: config.APP.DONATION_FORM_RULES,
        inline: true,
        onFailure: () => {
          if (this.isMessageVisible()) {
            this.toggleMessage();
          }

          return false;
        }
      })
      .api({
        serializeForm: true,
        responseAsync: (settings, callback) => {
          this
            .get('donations')
            .add({
              username: donationForm.form('get value', 'name'),
              amount: donationForm.form('get value', 'amount')
            })
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
        onSuccess: () => {
          if (!this.isDestroyed) {
            if (!this.isMessageVisible()) {
              this.toggleMessage();
            }

            donationForm.form('clear');
          }
        }
      });

    this.set('successMsg', this.$('#successMsg'));
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
