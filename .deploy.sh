#!/bin/bash

ember build --env production

npm install -g firebase-tools

firebase deploy --token "$FIREBASE_TOKEN" --message "$TRAVIS_TAG"
