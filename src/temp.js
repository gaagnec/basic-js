let arr = '.unusual.com@usual.com';

function getEmailDomain(email) {
  let pos = email.indexOf('@');
  let result = email.slice(pos + 1);
  return result;
}

console.log(getEmailDomain(arr));
