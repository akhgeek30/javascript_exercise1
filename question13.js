var arr1 = [5, [22], [[14]], [[4]],[5,6]];

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
var arr=flattenDeep(arr1);
console.log(arr);