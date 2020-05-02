FROM node:12

RUN mkdir /ui

WORKDIR /ui

# Watchman
RUN set -ex \
  && export WATCHMAN_VERSION=4.9.0 \
  && curl -SL "https://github.com/facebook/watchman/archive/v${WATCHMAN_VERSION}.tar.gz" | tar -xz -C /tmp/ \
  && cd /tmp/watchman-${WATCHMAN_VERSION} \
  && ./autogen.sh \
  && ./configure \
  && apt-get update && apt-get install -y --no-install-recommends python-dev \
  && make \
  && make install \
  && apt-get purge -y --auto-remove python-dev \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /tmp/*

COPY package.json .
COPY package-lock.json .
RUN npm install

# App and live-reload ports
EXPOSE 3001 35730
