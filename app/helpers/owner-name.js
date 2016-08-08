import Ember from 'ember';

export function ownerName([uid, donation]) {
  const nameHtmlFormat = uid === donation.get('userId') ?
    'You' : `<a class="user">${donation.get('username')}</a>`;

  return Ember.String.htmlSafe(nameHtmlFormat);
}

export default Ember.Helper.helper(ownerName);
