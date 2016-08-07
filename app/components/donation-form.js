import Ember from 'ember';
import config from 'donation-form/config/environment';

export default Ember.Component.extend({
  successMsg: null,
  store: Ember.inject.service('store'),

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
        loadingDuration: 1500,
        responseAsync: (settings, callback) => {
          this
            .get('store')
            .createRecord('donation', {
              username: donationForm.form('get value', 'name'),
              amount: donationForm.form('get value', 'amount')
            })
            .save()
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

    this.successMsg = this.$('#successMsg');
  },

  isMessageVisible() {
    return this.successMsg.transition('is visible');
  },

  toggleMessage() {
    this.successMsg.transition('fade down');
  },

  actions: {
    handleCloseMessage() {
      this.toggleMessage();
    }
  }
});
