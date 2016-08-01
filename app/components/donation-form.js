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
        type: 'integer',
        prompt: 'Please enter your amount paid'
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
      .$('.ui.checkbox')
      .checkbox();

    this
      .$('.ui.form')
      .form({
        fields: donationFormRules,
        inline: true,
        on: 'submit'
      });
  },

  actions: {
    handleDonationSubmit() {
      this
        .$('.ui.form')
        .form('validate form');

      // check valid before showing error to user
    }
  }
});
