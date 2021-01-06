#!/bin/bash

testFolder="test-website"

mkdir $testFolder
mkdir $testFolder/assets $testFolder/assets/{styles,scripts,imgs,templates}
mkdir -p $testFolder/node_modules/@somoscuatro/gulp-wordpress
cp -R index.js config.js tasks utils package.json $testFolder/node_modules/@somoscuatro/gulp-wordpress
cp sample.gulpfile.js $testFolder/gulpfile.js

cp -r test/templates/*.scss $testFolder/assets/styles
cp -r test/templates/*.js $testFolder/assets/scripts
cp -r test/templates/test.jpg $testFolder/assets/imgs
cp -r test/templates/fonts $testFolder/assets/fonts
cp -r test/templates/.babelrc $testFolder/assets
