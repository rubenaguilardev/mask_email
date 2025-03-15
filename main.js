let email = 'benaguilar@gmail.com';

const maskEmail = email => {
  let atIndex = email.indexOf('@');
  let atEndOfEmail = email.slice(atIndex - 1);
  let emailSlice = email.slice(1, atIndex - 1);
  return `${email[0]}${emailSlice.replace(emailSlice, '*'.repeat(atIndex - 2))}${atEndOfEmail}`;
}

console.log(maskEmail(email));