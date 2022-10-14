let arr = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino',
  },
  'Erazim Kohak',
  '  val_plumwood',
];

function createDreamTeam(members) {
  let clubName = [];
  let result = '';

  if (!Array.isArray(members) || members.length < 1) return false;

  for (let key of Object.values(members)) {
    if (typeof key == 'string') {
      key = key.trim();
      clubName = clubName.concat(key[0].toUpperCase());
    }
    // return result;
  }

  clubName.sort();
  result = clubName.join('');
  //   result.sort();
  console.log(result);

  return result.length > 0 ? result.toUpperCase() : false;
  console.log(result.length); //BDETV
}

console.log(createDreamTeam(arr));

//   lenCount(arr);

//   function lenCount(arr) {
//     for (let key of arr) {
//       if (Array.isArray(key)) {
//         {
//           count++;
//           lenCount(key);
//         }
//       } else count++;
//     }
//     return count;
//   }
//   return count;
