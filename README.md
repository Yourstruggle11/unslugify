# unslugify


```js
var unslugify = require("@yourstruggle11/unslugify");
unslugify('some-string-goes-here') // some string goes here
// if your slug contain something other than '-' as separator
unslugify('some_string_goes_here',{replacement:"_"})  // some string goes here
```

## All available options

```js
unslugify('hello-world', {
  replacement: '-',  // remove specific character from the slug, defaults to `-`
  lower: false,      // convert to lower case, defaults to `true`
  capitalizeEachWord: true,     // as the name suggest capitalize each word of the slug, defaults to `false`
})
```