#!/bin/bash

#?###################################################################################################
#?                                                                                                  #
#?                                      Output Helper Methods                                       #
#?                                                                                                  #
#?###################################################################################################

trap "exit" INT

function blue_text_box()
{
  echo " "
  local s="$*"
  tput setaf 3
  echo " -${s//?/-}-
| ${s//?/ } |
| $(tput setaf 4)$s$(tput setaf 3) |
| ${s//?/ } |
 -${s//?/-}-"
  tput sgr 0
  echo " "
}

function red_text_box()
{
  echo " "
  local s="$*"
  tput setaf 3
  echo " -${s//?/-}-
| ${s//?/ } |
| $(tput setaf 1)$s$(tput setaf 3) |
| ${s//?/ } |
 -${s//?/-}-"
  tput sgr 0
  echo " "
}

function green_text_box()
{
  echo " "
  local s="$*"
  tput setaf 3
  echo " -${s//?/-}-
| ${s//?/ } |
| $(tput setaf 2)$s$(tput setaf 3) |
| ${s//?/ } |
 -${s//?/-}-"
  tput sgr 0
  echo " "
}

#!###################################################################################################
#!                                                                                                  #
#!                                       Script Start                                               #
#!                                                                                                  #
#!###################################################################################################

# ! bring down any service instance if it exists
red_text_box 'Removing Old Stack if It Exists'
docker-compose down

# ? Change Permissions for Artisan
chmod +x artisan

# ? Remove everything in the storage/database & bootstrap/cache directory
sudo rm -rf storage/database/*
sudo rm -rf bootstrap/cache/*.php

# Start & Build Container Stack
blue_text_box 'Rebuilding the docker images & Starting them'
docker-compose up -d --build

# * Install Laravel Dependencies
green_text_box 'Installing Laravel Dependencies'
docker exec -i backend composer install

# * Install Front-end Dependencies & Build
green_text_box 'Installing Dependencies & Build for User UI'
docker exec -i client npm i
docker exec -i client npm run prod

# ! Generate Key & Caching/Optimizing Config
red_text_box 'Generating Laravel'
docker exec -i backend php artisan key:generate

# ! Migrate and Generate Passport Encryption Key
red_text_box 'Migrating & Seeding'
sleep 10
docker exec -i backend composer dump-autoload
docker exec -i backend php artisan migrate:fresh --seed
docker exec -i backend chmod o+w ./storage/ -R
