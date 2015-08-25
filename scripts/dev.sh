#!/bin/bash
export $( cat .env|xargs)
./node_modules/.bin/webpack-dev-server \
  --hot \
  --debug \
  --colors \
  --verbose \
  --display-chunks \
  --progress \
  --devtool eval \
  --content-base build \
  --history-api-fallback \
  --output-pathinfo
