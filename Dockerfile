
FROM ubuntu:20.04

ENV DENO_VERSION=1.11.5

RUN apt-get -qq update \
 && apt-get upgrade -y -o Dpkg::Options::="--force-confold" \
 && apt-get -qq install -y ca-certificates curl unzip --no-install-recommends \
 && curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
         --output deno.zip \
 && unzip deno.zip \
 && rm deno.zip \
 && chmod 755 deno \
 && mv deno /usr/bin/deno \
 && apt-get -qq remove -y ca-certificates curl unzip \
 && apt-get -y -qq autoremove \
 && apt-get -qq clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN deno install --unstable -f --allow-read --allow-run --allow-write --allow-net https://deno.land/x/denon@2.4.7/denon.ts
ENV PATH="/root/.deno/bin:$PATH"

COPY . /var/www/app/
WORKDIR /var/www/app


CMD ["sh", "-c", "denon format & denon start start"]
