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
      .$('.ui.checkbox')
      .checkbox();

    this
      .$('.ui.form')
      .form({
        fields: donationFormRules,
        inline: true,
        on: 'blur'
      });

    this
      .$('.ui.blue.button')
      .api({
        loadingDuration: 2000,
        mockResponse: {
          success: true
        },
        beforeSend: function (settings) {
          return false;
        }
      });
  },

  actions: {
    handleCloseMessage() {
      this
        .$('.ui.success.message')
        .transition('fade', () => {
          this.set('isSuccess', false);
        });
    }
  }
});
