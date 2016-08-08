import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  add(donation) {
    return this
      .get('store')
      .createRecord('donation', donation)
      .save();
  },

  getAll() {
    return this
      .get('store')
      .findAll('donation');
  }
});
