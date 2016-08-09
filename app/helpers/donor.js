import Ember from 'ember';

const hashids = new Hashids();

const convertToHex = (string) => {
  let hex = '';
  for (let i = 0; i < string.length; i++)
    hex += string.codePointAt(i).toString(16);

  return hex;
};

export function donor([donation, dataAttrs]) {
  const hashedId = hashids
    .encodeHex(convertToHex(donation.get('userId')));

  return Ember.String.htmlSafe(`
    <a class="user" ${dataAttrs} data-tooltip="id: ${hashedId}">
      ${donation.get('username')}
    </a>
  `);
}

export default Ember.Helper.helper(donor);
