/**********************************************
* CHECKNAME
**********************************************/
function checkName(name, theClass) {
    if( !name.search(
    (/^\s*(([M][c]\s?)?)([A-Z]?)([a-z]*)((\-[A-Z][a-z]*)?)\s*$/))){
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}

/**********************************************
* CHECKADDRESS
**********************************************/
function checkAddress(address, theClass) {
    if( !address.search(
    (/^\s*(\d*(\s*((\d(([t][h])|([s][t])|([n][d])|([r][d])))?\s*(([A-Z]?)[a-z]*))))*\s*$/))) {
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
  if( !phone.search((/^\(?(\d{3})\)?\-?\s?(\d{3})\-?\s?(\d{4})$/))) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
    }
  else
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
}

/*********************************************
* CHECKCARD
*********************************************/
function checkCard( cardNumber, theClass) {
  if( !cardNumber.search(
     /^((\s*\d{16}\s*)|(\s*\d{4}\s\d{4}\s\d{4}\s\d{4}\s*))$/)) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
  }
  else {
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';    
    }
}

/*********************************************
* CHECKEXPDATE
*********************************************/
function checkExpDate( date, theClass) {
  if( !date.search(
  /^(\d|([1][0-2])?)\/?\s?(([1](([7][6-9]\d)|([7][5][3-9]))|([1][8-9]\d{2}))|[2](([1][0][0])|([0]\d{2})))$/)) {
      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';    
  }
  else {
      document.getElementsByClassName(theClass)[0].style.visibility = 'visible';    
    }
}