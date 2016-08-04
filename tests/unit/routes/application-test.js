import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  needs: [
    'adapter:release',
    'serializer:release',
    'model:release'
  ]
});

test('should get data of the latest release from GitHub', function (assert) {
  const route = this.subject();

  Ember.run(() => {
    route.model().then((release) => {
      assert.equal(release.get('id'), 'latest', 'id must be "latest"');
      assert.ok(release.get('tag'), 'tag is not null');
    });
  });
});
