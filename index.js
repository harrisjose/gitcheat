#! /usr/bin/env node

var fs = require('fs')
var msee = require('msee')
var userargs = process.argv.slice(2)
var keyword = userargs[0]

if (keyword === undefined) {
  keyword = 'help'
}

try {
  var content = fs.readFileSync('./cheats/' + keyword + '.md', 'utf8')
} catch (e) {
  if (e.code === 'ENOENT') {
    content = fs.readFileSync('./docs/help.md', 'utf8')
  } else {
    throw e
  }
}
console.log(msee.parse(content))
