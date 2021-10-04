import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let s = []
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] == -1) {
     s.push([i, 0, arr[i]])
     }
  }
  if (s.length == 0) {
    return arr.sort((a, b) => a - b)
  }
  
  let arr1 = arr.filter(e => e !== -1).sort((a, b) => a - b)
  
  for (let k = 0; k < s.length; k++) {
     arr1.splice(...s[k])
  }
  return arr1
}
