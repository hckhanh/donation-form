#!/bin/bash

set -ex

if [[ ! -z "$TRAVIS_TAG" ]]; then
  ember build -e production
  npm install -g firebase-tools
  firebase deploy --token "$FIREBASE_TOKEN" -m "$TRAVIS_TAG"
fi
