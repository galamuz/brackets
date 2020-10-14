module.exports = function check(str, bracketsConfig) {

    var arr =bracketsConfig[0];
   
    let temp = str;
    let reg ="";

    for (let i = 0; i < bracketsConfig.length; i++) {

        
        temp = temp.replace(bracketsConfig[i].join(''), '');
     
    }

  if (temp === str) {
      return false;
  } else if (temp === '') {
      return true;
  } else return check(temp, bracketsConfig); 
}
