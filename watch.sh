#!/bin/bash

#############################################################
## Run live-server, watch Sass and Autoprefixer.           ##
## To install them:                                        ##
## > npm install live-server sass postcss-cli autoprefixer ##
#############################################################

live-server & sass --watch ./assets/styles/scss/index.scss ./assets/styles/css/index.css & npx postcss ./assets/styles/css/index.css -w --use autoprefixer -o ./assets/styles/css/style.css
