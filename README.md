# thread-first
Like the thread first macro in clojure https://clojure.org/guides/threading_macros

# install
`npm install thread-first`

# usage
```javascript
  var threadFirst = require('thread-first')

  function head (array) {
    return Array.isArray(array) && array[0]
  }
  var text = 'abcd'
  var X = threadFirst(text, [
    ['replace', 'a', 'x'],
    'toUpperCase',
    ['split', ''],
    head
  ])
  console.log(X) // 'X'
```
