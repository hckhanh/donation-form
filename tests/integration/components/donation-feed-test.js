import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DONATIONS_LIST = [
  {
    amount: 30,
    createdAt: 1470646585208,
    userId: 'b3db8dc1-4017-46e1-adaf-07101a530d6a',
    username: 'Khanh Hoang 1'
  },
  {
    amount: 45,
    createdAt: 1470650075029,
    userId: '3bhc8dc1-5217-56s1-poiu-27191a530d6a',
    username: 'Khanh Hoang 2'
  },
  {
    amount: 12,
    createdAt: 1470651109806,
    userId: 'a5db8dc1-7806-46e1-qwer-18101a635d6v',
    username: "Khanh Hoang 3"
  },
  {
    amount: 60,
    createdAt: 1470663632056,
    userId: 'k6dk8dc1-1993-96p1-dkjr-71911z530k6a',
    username: "Khanh Hoang 4"
  }
].map((donation) => Ember.Object.create(donation));

const StubStore = Ember.Service.extend({
  findAll() {
    return Ember.RSVP.resolve(DONATIONS_LIST);
  }
});

moduleForComponent('donation-feed', 'Integration | Component | donation feed', {
  integration: true,
  beforeEach() {
    this.register('service:store', StubStore);
    this.inject.service('store');
  }
});

test('should show the list of donations', function (assert) {
  this.set('uid', 'k6dk8dc1-1993-96p1-dkjr-71911z530k6a');

  this.render(hbs`{{donation-feed uid=uid}}`);

  assert.equal(this.$('.ui.feed .event').length, 4, 'show the list of 4 donations');
});
