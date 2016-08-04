export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://api.github.com';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'repos/hckhanh/donation-form';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/releases/:id', () => {
    return {
      "url": "https://api.github.com/repos/hckhanh/donation-form/releases/3803782",
      "assets_url": "https://api.github.com/repos/hckhanh/donation-form/releases/3803782/assets",
      "upload_url": "https://uploads.github.com/repos/hckhanh/donation-form/releases/3803782/assets{?name,label}",
      "html_url": "https://github.com/hckhanh/donation-form/releases/tag/v1.0.0",
      "id": 3803782,
      "tag_name": "v1.0.0",
      "target_commitish": "master",
      "name": "v1.0.0",
      "draft": false,
      "author": {
        "login": "hckhanh",
        "id": 6380436,
        "avatar_url": "https://avatars.githubusercontent.com/u/6380436?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/hckhanh",
        "html_url": "https://github.com/hckhanh",
        "followers_url": "https://api.github.com/users/hckhanh/followers",
        "following_url": "https://api.github.com/users/hckhanh/following{/other_user}",
        "gists_url": "https://api.github.com/users/hckhanh/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/hckhanh/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/hckhanh/subscriptions",
        "organizations_url": "https://api.github.com/users/hckhanh/orgs",
        "repos_url": "https://api.github.com/users/hckhanh/repos",
        "events_url": "https://api.github.com/users/hckhanh/events{/privacy}",
        "received_events_url": "https://api.github.com/users/hckhanh/received_events",
        "type": "User",
        "site_admin": false
      },
      "prerelease": false,
      "created_at": "2016-08-03T15:04:26Z",
      "published_at": "2016-08-03T15:09:23Z",
      "assets": [

      ],
      "tarball_url": "https://api.github.com/repos/hckhanh/donation-form/tarball/v1.0.0",
      "zipball_url": "https://api.github.com/repos/hckhanh/donation-form/zipball/v1.0.0",
      "body": "* Add basic features to the site\r\n* Add menu bar and referenced links"
    };
  });
}
