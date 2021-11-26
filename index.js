function generatePassword(size, char) {
  var length = size,
      charset = char,
      password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}



chrome.tabs.getSelected(null,function(tab) { 
  var url = tab.favIconUrl;
  var domain = (new URL(url));
  domain = domain.hostname.replace('www.','');
  domain = domain.replace('.com','');
  var character = generatePassword(1, "@#");
  var upper = generatePassword(1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var number = generatePassword(2, "02468");
  domain = character + upper + domain + number;
  document.getElementById('pass').innerHTML = domain;
});

