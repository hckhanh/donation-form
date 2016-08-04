import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.github.com',
  namespace: 'repos/hckhanh/donation-form',
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});
