# Chained promises

The `.then()` and `.catch()` methods always return a promise. So you can chain multiple `.then()` calls together. This makes it very simple to create step-by-step actions, where the value returned from each step is used/transformed by the next one.

In this example, 4 tasks are chained to fetch a random image from https://picsum.photos and validate its size. One of these tasks is a size-validation step. If the picture is smaller than 6KB, the image will be displayed along with its size.
 
If, however, the picture size is 6KB or larger, the image will be rejected (breaking the promise chain), generating an error that will be caught by the `.catch()` method at the end of the chain. 

The `.catch()` method will also handle any other errors that might happen in any of the links of the chain.

Read more at: https://imelgrat.me/javascript/javascript-promises-improvement-developers
