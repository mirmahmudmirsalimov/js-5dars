var firstName = prompt("Ismingiz");
var surName = prompt("Familya");
var userAge = prompt("Yoshingiz");
var WhereYouLive = prompt("Turar joingiz");
var enterTheNumber = prompt("Number");
var enterYourEmail = prompt("Email");
var passWord = prompt("Parol");
var pollLiked = prompt("So'ronoma Yoqtimi");

var result =   
 `-Siznig ismingiz; ${firstName}
-Siznig Familyangiz; ${surName}
-Siznig Yoshingiz; ${userAge}
-Siznig Turar joingiz; ${WhereYouLive}
-Siznig telefonigiz; ${enterTheNumber}
-Siznig Emailingiz; ${enterYourEmail}
-Sizning Parol; ${passWord}
-So'ronoma Yoqtimi; ${pollLiked}`;

alert (result);
console.log(result)
