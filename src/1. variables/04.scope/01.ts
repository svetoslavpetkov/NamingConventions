/**
 * 
*/

const smallScopeExample1 = (currentEmployeeFirstName: string) => {
  if (currentEmployeeFirstName.length <=5) {
    return currentEmployeeFirstName.toLocaleLowerCase();
  } else if (currentEmployeeFirstName.length <=15){
    return currentEmployeeFirstName.toUpperCase();
  } else {
    return currentEmployeeFirstName;
  }
}




/**
 * 
 * 
 *  
 */



const smallScopeExample2 = (firstName: string) => {
  if (firstName.length <=5) {
    return firstName.toLocaleLowerCase();
  } else if (firstName.length <=15){
    return firstName.toUpperCase();
  } else {
    return firstName;
  }
}
