import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (members === []) {
    return false
  }
  if (typeof(members) !== 'object') {
    return false
  }
  if (!members) {
    return false
  }
  let members1 = members.filter(e => typeof(e) == 'string')
   //let m = members1.filter(e => !e.includes(' '))
   let m = []
   for (let member of members1) {
     if (member.includes(' ')) {
       let mem = member.split(' ').join('')
       m.push(mem)
     }
     else {
       m.push(member)
     }
   }
  let members2 = m.map(e => {return e[0]}).sort()
  return members2.join('').toUpperCase()
}
