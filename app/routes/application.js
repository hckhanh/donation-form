import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this
      .get('session')
      .fetch()
      .catch(() => { });
  },

  model() {
    return this
      .get('store')
      .findRecord('release', 'latest');
  },

  afterModel() {
    if (!this.get('session.isAuthenticated')) {
      this
        .get('session')
        .open('firebase', { provider: 'anonymous' })
        .catch(error => {
          console.error(error);
        });
    }
  }
});
