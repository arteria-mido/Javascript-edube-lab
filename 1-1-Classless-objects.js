/**
Write a function, deepComp, that will compare two objects given as arguments (deep comparison).
Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).

Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.
For testing, use the following piece of code:

let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false
*/

let deepComp = (obj1, obj2) => {
    let isSimilar = true;
    if ((Object.keys(obj1).length !== Object.keys(obj2).length)
        || (typeof obj1 !== typeof obj2)) {
        return false;
    } else {
        for (prop in obj1) {
            if ((typeof obj1[prop] !== "object")
                && (obj1[prop] !== obj2[prop])) {
                return false;
            } 
            else if (typeof obj1[prop] === "object") {
                isSimilar = deepComp(obj1[prop], obj2[prop]);
                if (!isSimilar) {return false; }
            }
        }
    }
    return isSimilar;
}
