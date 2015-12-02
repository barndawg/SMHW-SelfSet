localStorage.setItem("SMHW-SelfSet", localStorage["SMHW-SelfSet"]);
var newHwkData = ["newHwkSubject", "newHwkTitle", "newHwkDue", "newHwkDesc"];
var hwkData = JSON.parse(localStorage["SMHW-SelfSet"]);
hwkData.push(JSON.stringify(newHwkData));
localStorage.setItem("SMHW-SelfSet", JSON.stringify(hwkData));

var hwkData = JSON.parse(localStorage["SMHW-SelfSet"]);
console.log(hwkData);
