#!/bin/bash
export $( cat .env|xargs)
./node_modules/.bin/webpack-dev-server \
  --hot \
  --debug \
  --colors \
  --verbose \
  --devtool eval \
  --display-chunks \
  --progress \
  --content-base build \
  --history-api-fallback \
  --output-pathinfo
