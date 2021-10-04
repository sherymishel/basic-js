import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
    let n = 0
    for (let b of backyard) {
      if (b.includes('^^')) {
        let a = b.filter(e => e == '^^')
        n += a.length
      }
    }
    return n;
  
  

}
