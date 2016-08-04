import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const release = {
      data: {
        type: 'release',
        id: id,
        attributes: {
          tag: payload.tag_name
        }
      }
    };

    return this._super(store, primaryModelClass, release, id, requestType);
  }
});
