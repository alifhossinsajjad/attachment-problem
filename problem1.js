function validateEmail(email) {
  if (typeof email !== "string" || email.length === 0 || email.length > 254) {
    return false;
  }

  let atIndex = -1;


  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      if (atIndex !== -1) {
        return false; 
      }
      atIndex = i;
    }
  }

  
  if (atIndex <= 0 || atIndex === email.length - 1) {
    return false;
  }

 
  for (let i = atIndex + 1; i < email.length; i++) {
    if (email[i] === ".") {
      if (i === atIndex + 1 || i === email.length - 1) {
        return false;
      }
      return true;
    }
  }

  return false;
}



console.log(validateEmail("john.doe@gmail.com")); 
console.log(validateEmail("john@doe@gmail.com")); 
console.log(validateEmail("john@gmail.c")); 
console.log(validateEmail("john@.com")); 
