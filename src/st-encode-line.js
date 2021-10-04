import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) { 
  let arr = str.split('')
  let f = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i-1]) {
      continue
      }
    let a = []
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] == arr[k]) {
        a.push(arr[k])
      }
    }
    let j = a.length + a[0]
    if (!f.includes(j)) {
    f.push(j)
    }
  }
  return f.join('')
}
