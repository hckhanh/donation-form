import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  username: DS.attr('string'),
  amount: DS.attr('number'),
  createdAt: DS.attr('number', {
    defaultValue() {
      return Date.now();
    }
  })
});
