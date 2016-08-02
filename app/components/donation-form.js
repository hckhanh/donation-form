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
  isSuccess: false,

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
        onSuccess: (response) => {
          if (!this.isDestroyed) {
            this.set('isSuccess', response.success);
            this
              .$('form')
              .form('clear');
          }
        }
      });

    this
      .$('span.tooltip')
      .popup({
        boundary: 'form',
        content: 'Just a demo form, not real ( ͡° ͜ʖ ͡°)',
        position: 'right center'
      });
  },

  actions: {
    handleCloseMessage() {
      this
        .$('div.ui.success.message')
        .transition('fade', () => {
          this.set('isSuccess', false);
        });
    }
  }
});
