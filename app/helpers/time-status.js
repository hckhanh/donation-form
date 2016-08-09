import Ember from 'ember';

export function timeStatus([time]) {
  return moment(time).fromNow();
}

export default Ember.Helper.helper(timeStatus);
