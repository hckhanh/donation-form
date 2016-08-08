import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  didInsertElement() {
    this
      .get('store')
      .findAll('donation')
      .then((donations) => {
        this.set('donationFeed', donations);
      });
  }
});
