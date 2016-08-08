import Ember from 'ember';

export default Ember.Component.extend({
  donations: Ember.inject.service(),
  session: Ember.inject.service(),

  didInsertElement() {
    this.get('donations')
      .getAll()
      .then((donations) => {
        this.set('donationFeed', donations);
      });
  }
});
