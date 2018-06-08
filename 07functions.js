/**********************************************
* CHECKNAME
**********************************************/
function checkName(name, theClass) {
    if( !name.search(
    (/^\s*([M][c]\s?)*[A-Z][a-z]*(\-[A-Z][a-z]*)\s*$/))){
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}

/**********************************************
* CHECKNAME
**********************************************/
function checkAddress(address, theClass) {
    if( !address.search(
    (/^\s*\d*(\s*((\d(([t][h])|([s][t])|([n][d])|([r][d])))?\s*(([A-Z]?)[a-z]*)))\s*$/))) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}

/**********************************************
* CHECKSTATE
**********************************************/
function checkState(state, theClass) {
  if( !state.search(
    (/^\s*(([Aa][lLkKzZrR])|([cC][aAoOtT])|([Dd][eE])|([fF][Ll])|([gG][aA])|([hH][iI])|([iI][dDlLnNaA])|([kK][sSyY])|([lL][aA])|([mM][eEdDaAiInNsSoOtT])|([nN][eEvVjJmMyYcCdD])|([oO][hHkKrR])|([pP][aA])|([rR][iI])|([sS][cCdD])|([tT][nNxX])|([uU][tT])|([vV][tTaA])|([wW][aAvViIyY]))\s*$/))) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}

/**********************************************
* CHECKZIP
**********************************************/
function checkZip(zip, theClass) {
  if( !zip.search((/^\s*(\d{5})\s?\-?(\d{4})?\s*$/))) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}

/**********************************************
* CHECKPHONE
**********************************************/
function checkPhone(phone, theClass) {
  if( !phone.search((/^\(?(\d{3})\)?\s?(\d{3})\-?\s?(\d{4})$/))) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}