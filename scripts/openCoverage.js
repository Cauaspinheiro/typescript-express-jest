const open = require('open')
const path = require('path')

open(path.resolve(__dirname, '..', 'coverage', 'lcov-report', 'index.html'))
