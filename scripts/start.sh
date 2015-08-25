#!/bin/bash
export $( cat .env|xargs)
./node_modules/.bin/nodemon \
  --exec node_modules/.bin/babel-node \
    --stage 0 \
    -- ./server/app.js
