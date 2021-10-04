import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options)  {
  let s = [] 
  if (options.separator ==  undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
       s.push(str)
    }
    return s.join('')
  }
  else {
    for (let k = 0; k < options.repeatTimes; k++) {
      s.push(str)
      s.push(optiions.separator)
   }
   return s.pop('').join()
  }
}
