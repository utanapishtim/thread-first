var threadfst = require('../')
var assert = require('assert')

var str = 'abcdefg'

function head (array) {
  return Array.isArray(array) && array[0]
}

var X = threadfst(str, [
  ['replace', 'a', 'x'],
  'toUpperCase',
  ['split', ''],
  head
])

assert(X === 'X', 'test 1, result does not equal \'X\'')

var obj = {
  x: {
    y: {
      z: 'foo'
    }
  }
}

var foo = threadfst(obj, ['x', 'y', 'z'])

assert(foo === 'foo')

function addThree (a) {
  return function addTwo (b) {
    return function addOne (c) {
      return function addNone () {
        return a + b + c
      }
    }
  }
}

var res = threadfst(addThree, [
  ['call', null, 1],
  ['call', null, 2],
  ['call', null, 3],
  ['apply', null, []]
])

assert(res === 6)

var obj2 = {
  x: {
    y: {
      z: {
        foo: {
          bar: {
            baz: true
          }
        }
      }
    }
  }
}

var result = threadfst(obj2, [
  'x', 'y', 'z', 'bar', 'baz'
])

assert(result === undefined)
