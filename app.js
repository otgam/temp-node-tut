const _ = require('lodash');
const items = [1,[3,[5,[7]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);