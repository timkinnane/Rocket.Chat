#!/usr/bin/env node

const fs = require('fs')
const util = require('util')
const cssstats = require('cssstats')

var mergedcss = fs.readFileSync('../../.meteor/local/build/programs/web.browser/merged-stylesheets.css')
// var themecss = fs.readFileSync('../../.meteor/local/build/programs/web.browser/packages/theme.css', 'utf8')

var stats = cssstats(mergedcss, {mediaQueries: false})

console.log(stats)
