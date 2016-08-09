import Ember from 'ember';

const hashids =new Hashids();

const convertToHex = (str) =>{

};

export function donor([donation]) {
  const bufferId = new Buffer(donation.get('userId'));
  const hashedId = hashids.encodeHex(bufferId.toString('hex'));

  return Ember.String.htmlSafe(`
    <a class="user" data-offset="top left" data-content="id: ${hashedId}">
      ${donation.get('username')}
    </a>
  `);
}

export default Ember.Helper.helper(donor);
