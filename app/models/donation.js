import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  amount: DS.attr('number'),
  createdAt: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  })
});
