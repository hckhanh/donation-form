import Ember from 'ember';

const donationFormRules = {
  name: {
    identifier: 'name',
    rules: [
      {
        type: 'empty',
        prompt: 'Please enter your name'
      },
      {
        type: 'minLength[5]',
        prompt: 'Your name must be at least 5 characters'
      }
    ]
  },
  amount: {
    identifier: 'amount',
    rules: [
      {
        type: 'empty',
        prompt: 'Please enter your amount paid'
      },
      {
        type: 'integer',
        prompt: 'Please enter a valid amount paid'
      },
      {
        type: 'positive',
        prompt: 'Please enter a positive amount paid'
      }
    ]
  },
  terms: {
    identifier: 'terms',
    rules: [
      {
        type: 'checked',
        prompt: 'You must agree to the Terms and Conditions'
      }
    ]
  }
};

export default Ember.Component.extend({
  didInsertElement() {
    this
      .$('form')
      .form({
        fields: donationFormRules,
        inline: true,
        on: 'blur'
      })
      .api({
        serializeForm: true,
        loadingDuration: 1500,
        mockResponse: {
          success: true
        },
        onSuccess: () => {
          if (!this.isDestroyed) {
            this.toggleMessage();

            this
              .$('form')
              .form('clear');
          }
        }
      });

    this
      .$('span.tooltip')
      .popup({
        content: 'Just a demo form',
        position: 'bottom center'
      });
  },

  toggleMessage() {
    this
      .$('div.ui.success.message')
      .transition('fade down');
  },

  actions: {
    handleCloseMessage() {
      this.toggleMessage();
    }
  }
});
