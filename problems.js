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
