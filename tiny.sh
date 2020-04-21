#!/usr/bin/env bash

IMAGE=tinysis-ui-app:latest
CONTAINER=tinysis-ui-app
COMMAND=$1
shift
ARGS=$@

build () {
  docker build . -t $IMAGE
}

run () {
  docker run \
    -p3001:3001 \
    -p35730:35730 \
    -d \
    -it \
    --name $CONTAINER \
    --mount type=bind,source="$(pwd)",target=/tinysis \
    $IMAGE
}

server () {
  docker exec -it $CONTAINER npm start
}

install () {
  docker exec $CONTAINER npm install
}

test () {
  docker exec $CONTAINER npm test
}

lint () {
  docker exec $CONTAINER npm run lint:fix
}

npm () {
  docker exec $CONTAINER npm run $ARGS
}

cleanup() {
  docker stop $CONTAINER
  docker rm $CONTAINER
  docker rmi $IMAGE
}

shell() {
  docker exec -it $CONTAINER bash
}

usage () {
  echo "tiny-utils <command>"
  echo ""
  echo "Basics:"
  echo "-------"
  echo "setup   | Builds the image, runs it, and installs npm dependencies"
  echo "server  | Starts the dev server"
  echo "test    | Runs the Ember test suite"
  echo "lint    | Runs eslint with auto-fix"
  echo "cleanup | Stops the container, deletes it and deletes the image(s)"
  echo
  echo "Advanced:"
  echo "---------"
  echo "install | Updates dependencies"
  echo "npm     | Runs any npm command. Run ./tiny.sh npm to see options"
  echo "shell   | Opens a bash shell on the container"
}

case "$COMMAND" in
  "cleanup"|"run"|"server"|"test"|"install"|"lint"|"npm"|"shell")
      $COMMAND
      ;;
  "setup")
      build
      run
      install
      ;;
  *)
      usage
esac