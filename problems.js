function palindrome(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
  if (s == o.join('')) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

palindrome('racecar');
palindrome('robotobor');
palindrome('great-deal');

function dashInsert(num) {
  var aNum = num.toString().split('');
  var a = [];

  for (i=0; i < aNum.length; i++) {
    if ((aNum[i] % 2 != 0) && ((aNum[i + 1]) % 2 != 0)) {
      aNum[i] += '-';
      a.push(aNum[i]);
    } else {
      a.push(aNum[i]);
    }
  }
  console.log(a.join(''));
}

dashInsert(445566);
dashInsert(44444466);
dashInsert(44776);
dashInsert(44776655499922);

var encrypt = function(plaintext, shiftAmount) {
    var ciphertext = "";
    for(var i = 0; i < plaintext.length; i++) {
        var plainCharacter = plaintext.charCodeAt(i);
        if(plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shiftAmount) % 26 + 97);
        } else if(plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += String.fromCharCode((plainCharacter - 65 + shiftAmount) % 26 + 65);
        } else {
            ciphertext += String.fromCharCode(plainCharacter);
        }
    }
    return ciphertext;
}

var decrypt = function(ciphertext, shiftAmount) {
    var plaintext = "";
    for(var i = 0; i < ciphertext.length; i++) {
        var cipherCharacter = ciphertext.charCodeAt(i);
        if(cipherCharacter >= 97 && cipherCharacter <= 122) {
            plaintext += String.fromCharCode((cipherCharacter - 97 - shiftAmount + 26) % 26 + 97);
        } else if(cipherCharacter >= 65 && cipherCharacter <= 90) {
            plaintext += String.fromCharCode((cipherCharacter - 65 - shiftAmount + 26) % 26 + 65);
        } else {
            plaintext += String.fromCharCode(cipherCharacter);
        }
    }
    return plaintext;
}

var e = encrypt('Caeser Cipher', 2);
console.log(e);
var u = decrypt(e, 2);
console.log(u);
