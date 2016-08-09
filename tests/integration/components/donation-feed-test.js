import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const DONATIONS_LIST = [
  {
    amount: 30,
    createdAt: 1470646585208,
    userId: 'UmhkV31KkGdigX4XvoQ8E87Jp1k2',
    username: 'Khanh Hoang 1'
  },
  {
    amount: 45,
    createdAt: 1470650075029,
    userId: 'UmhkV31KkGdigX4XvoQ8E87Jp1k2',
    username: 'Khanh Hoang 2'
  },
  {
    amount: 12,
    createdAt: 1470651109806,
    userId: 'UmhkV31KkGdigX4XvoQ8E87Jp1k2',
    username: "Khanh Hoang 3"
  },
  {
    amount: 60,
    createdAt: 1470663632056,
    userId: 'UmhkV31KkGdigX4XvoQ8E87Jp1k2',
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
  this.render(hbs`{{donation-feed}}`);

  assert.equal(this.$('.ui.feed .event').length, 4, 'show the list of 4 donations');
});
