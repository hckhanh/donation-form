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
        type: 'isNaN',
        prompt: 'Your name is not a number'
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
      .$('.checkbox')
      .checkbox();

    this
      .$('form')
      .form({
        fields: donationFormRules,
        inline: true,
        on: 'blur',
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
        mockResponse: {
          success: true
        },
        onSuccess: () => {
          if (!this.isDestroyed) {
            if (!this.isMessageVisible()) {
              this.toggleMessage();
            }

            this.set('username', this.$('form').form('get value', 'name'));
            this.set('amount', this.$('form').form('get value', 'amount'));

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
        position: 'bottom center',
        variation: 'inverted'
      });
  },

  isMessageVisible() {
    return this
      .$('div.ui.success.message')
      .transition('is visible');
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
