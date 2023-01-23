#!/bin/bash
echo "Launch development environment"
echo "Starting frontend..."
yarn install
yarn start &
PID=$!
echo "Frontend started with PID $PID"
trap \
  kill $PID \
 SIGINT SIGTERM ERR EXIT
echo "Starting backend..."
pip install -r api/requirements.txt
pip install -r api/model/requirements.txt
echo "Starting backend..."
cd ./api && flask run --host 0.0.0.0 --port 5000
