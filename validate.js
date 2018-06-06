/**********************************************
* PROBLEM 1 : AGE
* VERIFY THAT THE USER HAS ENTERED A VALID AGE
* BETWEEN 0 AND 118.
**********************************************/
function checkAge(age, theClass) {
  if(age >= 0 && age <= 118) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
  }
  else {
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';    
  } 
}

/**********************************************
* PROBLEM 2 : SSN
* VERIFY THAT THE USER HAS ENTERED A VALID SOCIAL
* SECURITY NUMBER EITHER WITH SPACES OR WITHOUT.
**********************************************/
function checkSsn(ssn, theClass) {
  /*var pos = ssn.search(
    /^\d{3}-\d{2}-\d{4}$/); */
  if(!ssn.search( /^\s*\d{3}\-\d{2}\-\d{4}\s*$/)) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
  }
  else {
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';    
  } 
  
}

/**********************************************
* PROBLEM 3 : CREDIT CARD
* VERIFY THAT THE USER HAS ENETERED A VALID CREDIT
* CARD NUMBER EITHER WITH OR WITHOUT SPACES.
**********************************************/
function checkCredit(credit, theClass) {
  /*var credit = document.getElementById("form3");
  var pos = credit.search(
    /^\s*\d{16}\s*$/ || /^\s*\d{4}\s\d{4}\s\d{4}\s\d{4}\s*$/); */
  if(credit.search(
    ( /^\s*\d{16}\s*$/ || /^\s*\d{4}\s\d{4}\s\d{4}\s\d{4}\s*$/)) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';    
}

/**********************************************
* PROBLEM 4 : DATE
* VERIFY THAT THE USER HAS ENTERED A VALID DATE
**********************************************/
function checkDate(date, theClass) {
  var date = document.getElementById("form4");
  
}

/**********************************************
* PROBLEM 5 : STATE
* VERIFY THAT THE USER HAS ENTERED A VALID STATE
* ABREVIATION.
**********************************************/
function checkState(state, theClass) {
/*  var state = document.getElementById("form5");
  var pos = state.value.search(
    /^\[A-Z]{2}); */
  if(state.value.search(
    (/^\s*\[A-Z]{2}\s*/)) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}

/**********************************************
* PROBLEM 6 : DOLLARS
* VERIFY THAT THE USER HAS ENTERED A VALID DOLLAR
* AMOUNT.
**********************************************/
/*  function checkDollars(dollars, theClass) {
  var dollars = document.getElementById("form6");
  /((d{1,3},)(\d{3},)*)
}
*/