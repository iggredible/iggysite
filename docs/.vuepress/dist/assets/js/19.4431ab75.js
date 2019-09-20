(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{250:function(e,t,n){"use strict";n.r(t);var a=n(37),i=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("One classic CS question is to create "),n("a",{attrs:{href:"(https://www.mathsisfun.com/numbers/fibonacci-sequence.html)"}},[e._v("Fibonacci")]),e._v(" sequence. One of the solutions is a recursive function and it looks something like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function fib(n) {\n  if (n === 0 || n === 1)\n    return n;\n  else\n    return fib(n - 1) + fib(n - 2);\n}\n")])])]),n("p",[e._v("A major problem with recursive fibonacci function above is that it is an expensive function. It calls itself too many times. Calling fib(40) took about 30 seconds on my poor 2015 Macbook air (it calls itself "),n("em",[e._v("102,334,155")]),e._v(" times), fib(45) almost 5 minutes (calls itself "),n("em",[e._v("1,134,903,170")]),e._v(" times - a "),n("strong",[e._v("billion")]),e._v(" time).")]),e._v(" "),n("p",[e._v("Good luck calling fib(100).")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://media.giphy.com/media/qQdL532ZANbjy/giphy.gif",alt:"tearful cry"}})]),e._v(" "),n("p",[e._v("Is there anything we can do to shorten an expensive function like this?")]),e._v(" "),n("h1",{attrs:{id:"enter-memoization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enter-memoization","aria-hidden":"true"}},[e._v("#")]),e._v(" Enter memoization")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Memoization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Memoization"),n("OutboundLink")],1),e._v(" (rhymes with memorization) is a technique in CS to save previous result into a cache so when the function is called again with same argument, it would just return value from the cache and execute the function again. It is useful for expensive functions like fibonacci.")]),e._v(" "),n("h1",{attrs:{id:"how-do-we-use-memoization-on-fibonacci"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-we-use-memoization-on-fibonacci","aria-hidden":"true"}},[e._v("#")]),e._v(" How do we use memoization on fibonacci?")]),e._v(" "),n("p",[e._v("We can use:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const fib = (function() {\n  const cache = {};\n\n  function f(n) {\n    let value;\n\n    if (n in cache) {\n      value = cache[n];\n    } else {\n      if (n === 0 || n === 1)\n        value = n;\n      else\n        value = f(n - 1) + f(n - 2);\n\n        cache[n] = value;\n    }\n\n    return value;\n  }\n\n  return f;\n})();\n")])])]),n("p",[e._v("(Source: "),n("a",{attrs:{href:"https://www.sitepoint.com/implementing-memoization-in-javascript/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(". All credit for above goes to author).")]),e._v(" "),n("p",[e._v("Try the function above and run fib(40), fib(50), and even fib(100). You'll feel the difference.")]),e._v(" "),n("h1",{attrs:{id:"how-does-memoization-works"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-memoization-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How does memoization works?")]),e._v(" "),n("p",[e._v("It stores values on JS object ("),n("code",[e._v("const cache = {};")]),e._v(") so if the same value is called again, it will fetch the value from "),n("code",[e._v("cache")]),e._v(" instead of executing the function.")]),e._v(" "),n("p",[e._v("Let's say we want to call fib(5). When fib(5) is called the first time, since cache is empty and it could not find 5 in cache ("),n("code",[e._v("if (n in cache)")]),e._v(" is falsy), it executes fibonacci logic ("),n("code",[e._v("value = f(n - 1) + f(n - 2);")]),e._v(") and then saves the result to cache  ("),n("code",[e._v("cache[n] = value;")]),e._v("). Now we have a cache for "),n("code",[e._v("n = 5")]),e._v(" - something like this: "),n("code",[e._v("{5: 5}")]),e._v(" (btw, value of fib(5) is 5).")]),e._v(" "),n("p",[e._v("The next time we call fib(5) again, it finds ("),n("code",[e._v("{5: 5}")]),e._v(") in cache. Instead of executing fib(5) again, it simply returns the value from cache lookup "),n("code",[e._v("value = cache[n]; ... return value;")]),e._v(". Since our fibonacci is recursive, when we call for fib(5), it automatically fills up the cache with values up to 5. Calling fib(5) creates cache for fib(4), fib(3), etc.")]),e._v(" "),n("p",[e._v("Another example is, say we have just called fib(49) and we want to call fib(50) next. Before we call fib(50), inside our cache, we would have cache values like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n  0: 0,\n  1: 1,\n  2: 1,\n  3: 2,\n  ...\n  48: 4807526976,\n  49: 7778742049\n}\n")])])]),n("p",[e._v("We already have values from 0 to 49! All we need to do is to call "),n("code",[e._v("value = f(n - 1) + f(n - 2);")]),e._v(" - aka fib(49) + fib(48), which we already have stored in cache! This is how memoized fib(50) returns the result almost instantaneously compared to its non-memoized version.")]),e._v(" "),n("h1",{attrs:{id:"sweet-i-am-going-to-memoize-every-function-in-sight"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sweet-i-am-going-to-memoize-every-function-in-sight","aria-hidden":"true"}},[e._v("#")]),e._v(" Sweet! I am going to memoize every function in sight!")]),e._v(" "),n("p",[e._v("Unfortunately, not everything is memoizable. We can only memoize pure functions.")]),e._v(" "),n("p",[e._v("To be a pure function, it must:")]),e._v(" "),n("ol",[n("li",[e._v("Have return value")]),e._v(" "),n("li",[e._v("Does not depend on arguments other than its own argument")]),e._v(" "),n("li",[e._v("Does not mutate values outside of its scope")])]),e._v(" "),n("p",[e._v("Pure function is out of this article's scope, but check this "),n("a",{attrs:{href:"https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3?gi=56dfa64da56e",target:"_blank",rel:"noopener noreferrer"}},[e._v("short article on pure function"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h1",{attrs:{id:"other-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Other notes")]),e._v(" "),n("p",[e._v("Memoization is awesome. But let's not overuse it. Some things to consider when deciding when to use memoization:")]),e._v(" "),n("ol",[n("li",[e._v("Not all functions are memoizable. Only pure functions are.")]),e._v(" "),n("li",[e._v("Memoizations have high overhead. Remember, we have to create a cache to store many possible arguments for every memoized function.")]),e._v(" "),n("li",[e._v("Memoization is best used on expensive function. Regex calls and recursions are some of them that came into my mind.")])]),e._v(" "),n("h1",{attrs:{id:"that-s-nice-but-we-probably-would-never-use-fibonacci-in-real-life-is-there-an-example-of-real-life-use-of-memoization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#that-s-nice-but-we-probably-would-never-use-fibonacci-in-real-life-is-there-an-example-of-real-life-use-of-memoization","aria-hidden":"true"}},[e._v("#")]),e._v(" That's nice. But we probably would never use Fibonacci in real life. Is there an example of real life use of memoization?")]),e._v(" "),n("p",[e._v("Yup. "),n("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueJS"),n("OutboundLink")],1),e._v(" utilizes memoization. "),n("code",[e._v("cached(fn)")]),e._v(" is a memoization wrapper.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function cached (fn) {\n  var cache = Object.create(null);\n  return (function cachedFn (str) {\n    var hit = cache[str];\n    return hit || (cache[str] = fn(str))\n  })\n}\n")])])]),n("p",[e._v("And it is being used several times:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const camelizeRE = /-(\\w)/g\nexport const camelize = cached((str: string): string => {\n  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')\n})\n\nexport const capitalize = cached((str: string): string => {\n  return str.charAt(0).toUpperCase() + str.slice(1)\n})\n\nconst hyphenateRE = /\\B([A-Z])/g\nexport const hyphenate = cached((str: string): string => {\n  return str.replace(hyphenateRE, '-$1').toLowerCase()\n})\n")])])]),n("p",[e._v("You can find these function "),n("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/src/shared/util.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(". (Vue 2.5.0 at the moment of this writing. It might change in the future but you could always go back to previous version).")]),e._v(" "),n("p",[e._v("Happy hacking!")]),e._v(" "),n("h1",{attrs:{id:"resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),n("p",[e._v("More readings on memoziation:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding JavaScript Memoization In 3 Minutes"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://inlehmansterms.net/2015/03/01/javascript-memoization/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript Function Memoization\n"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.sitepoint.com/implementing-memoization-in-javascript/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implementing Memoization in Javascript"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("On pure function:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding Javascript Mutation and Pure Functions\n"),n("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=i.exports}}]);