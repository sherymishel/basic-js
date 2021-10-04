import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2 ) {
let arr1 = s1.split('')
  let arr2 = s2.split('')
  let n = 0
  let s = ''
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
       if (arr2[k] == arr1[i]) {
         n += 1
         s += arr2[k]
         }
       
    }
  }
  let a = [...new Set(s.split(''))]
  let fn = []
  
for (let j = 0; j < a.length; j++) {
let n = 0;
for (let k = 0; k < arr1.length; k++) {
if (a[j] == arr1[k]) {
n += 1;
}
}
fn.push(n)
}

let sn = []
  
for (let b = 0; b < a.length; b++) {
let n = 0;
for (let c = 0; c < arr2.length; c++) {
if (a[b] == arr2[c]) {
n += 1;
}
}
sn.push(n)
}
let a1 = 0;
for (let h = 0; h < fn.length; h++) {
  if (fn[h] < sn[h]) a1 += fn[h]
  else a1 +=sn[h]
}
return a1
}
