# Deno Rest
Deno backend RESTFul api boilerplate, starter for Deno backend project.


## Dependencies
  
- oak: A middleware framework for deno "https://deno.land/x/oak/mod.ts";
- denon: donemon for deno "https://deno.land/std/log/mod.ts";
- denodb: ORM for deno "https://deno.land/x/denodb@v1.0.38/mod.ts";
- bcrypt: utils for hashing "https://deno.land/x/bcrypt@v0.2.3/mod.ts";
- dotenv: "https://deno.land/x/dotenv/mod.ts";
- session: "https://deno.land/x/session/mod.ts";


## How to Use

This project allow to run with two option, with docker or directly form your computer

## Installation

First of all copy and paste the `env.example` to `env.development` or you can run command below.
```sh
cp ./.env/.env.example ./.env/.env.development
```

### With Docker

This project allow you to run this project on the docker, maksure you have docker installed on your machine. then run command below.

```sh
// with deamon flag
docker-compose up -d

// wthout diamon flag
docker-compose up

// to terminate
docker-compose down
```


### Run on Local Machine
This project also allow you to run directly form your machine.
```sh
denon start
```
Then you ready to go with deno.



Thanks for being visited this project.
