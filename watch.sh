#!/bin/bash

# run live-server, watch Sass and Autoprefixer
live-server & sass --watch ./index.scss ./index.css & npx postcss ./index.css -w --use autoprefixer -o ./style.css
