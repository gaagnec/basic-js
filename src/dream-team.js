const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  let clubName = [];
  let result = '';

  if (!Array.isArray(members) || members.length < 1) return false;

  for (let key of Object.values(members)) {
    if (typeof key == 'string') {
      key = key.trim();
      clubName = clubName.concat(key[0].toUpperCase());
    }
  }

  clubName.sort();
  result = clubName.join('');

  console.log(result);

  return result.length > 0 ? result : false;
  //BDETV
}

module.exports = {
  createDreamTeam,
};
