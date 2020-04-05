#!/usr/bin/env bash

COMMAND=$1

createDb () {
  docker exec api_web_1 rake db:create
}

migrateDb () {
  docker exec api_web_1 rake db:migrate
}

dropDb () {
  docker exec -e DISABLE_DATABASE_ENVIRONMENT_CHECK=1 api_web_1 rake db:drop
}

seedDb () {
  docker exec api_web_1 rake db:seed
}

deleteDbVolume () {
  docker volume remove api_tinysis_data
}

resetDb () {
  dropDb
  createDb
  migrateDb
  seedDb
}

resetImages () {
  stopContainers
  removeContainers
}

stopContainers () {
  docker stop api_web_1
  docker stop api_db_1
}

removeContainers () {
  docker rm api_web_1
  docker rm api_db_1
}

removeImages () {
  docker rmi api_web
  docker rmi api_db
}

# if this is not working, you need to get your AWS profile set up in 
# ~/.aws/credentials. Contact artzt@juniperswordplay.com for access.
#
setupApi () {
  aws s3 cp --profile=tinysis-devtest s3://tinysis-devtest/api . --recursive
}

startApi () {
  docker-compose up
}

usage () {
  echo "tiny-utils <command>"
  echo ""
  echo "Commands:"
  echo "---------"
  echo "setupApi    | generally one-time S3 download of any dev secrets files - requires AWS profile and access key"
  echo "startApi    | applies a docker-compose up to start the API stack"
  echo "setupDb     | sets up the development database; will delete the existing data if it exists"
  echo "resetImages | deletes the docker images for the API and DB"
}

case "$COMMAND" in
  "setupApi")
      setupApi
      ;;
  "setupDb")
      resetDb
      ;;
  "startApi")
      startApi
      ;;
  "resetImages")
      stopContainers
      removeContainers
      removeImages
      ;;
  *)
      usage
esac