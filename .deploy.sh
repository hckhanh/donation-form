#!/bin/bash

set -ex

if [[ ! -z "$TRAVIS_TAG" ]]; then
  ember build --env production
  npm install -g firebase-tools
  firebase deploy --token "$FIREBASE_TOKEN" --message "$TRAVIS_TAG"
fi
