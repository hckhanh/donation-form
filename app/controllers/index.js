import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleDonationSubmit(donation) {
      return this
        .get('store')
        .createRecord('donation', donation)
        .save();
    }
  }
});
