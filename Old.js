// Todo:
// - Store homeworks in 1 bit of localStorage (e.g SHMW-SelfSet extension) over [cont.]
// data0, data1: array inside SMHW-SelfSet with data0, data1... [QUICK FIX]
// - Change "x Self-Set homeworks" to work with the above [QUICK FIX]
// - Add "delete homework" function [-]
// - Fix weird overwriting bug. [-]
// Release! [PRERELEASE]

function init() {
  console.clear();
  console.log("Welcome to SMHW self homework extension, by ByteUp! Software. (c) 2015.");
  console.log("This is a version 1.0 PRERELEASE");
  console.log("It is likely that there are bugs. Please report them to me on GitHub.");
  var schoolEvents = document.getElementsByClassName("school-events-panel");
  var targetHeader = document.getElementsByTagName("h4");
  targetHeader = targetHeader[2];
  targetHeader.innerHTML = "Self-Set Homework (<a title='Add new homework' onclick='newHwk();'><font color = #FFFFFF>+</font></a>)";
  targetHeader.addEventListener("onclick", newHwk);
  var target = document.querySelectorAll("[title = 'translation missing: en.students.todo_items.school_events.no_announcements']");
  target = target[0];
  target.innerHTML = "No Self-Set Homework";
  updateHwk();
}

function newHwk(){
  var newHwkSubject = prompt("New homework subject", "Maths");
  var newHwkTitle = prompt("New homework title", "Maths revision for test");
  var newHwkDesc = prompt("New homework description", "Revise for a maths test on Thursday.");
  var newHwkDue = prompt("New homework due date", "12/11/2015");
  var storageLength = localStorage.length;
  var newHwkData = [newHwkSubject, newHwkTitle, newHwkDue, newHwkDesc];
  localStorage.setItem("data" + storageLength, JSON.stringify(newHwkData));
  updateHwk();
}

function updateHwk(){
  var target = document.querySelectorAll("[title = 'translation missing: en.students.todo_items.school_events.no_announcements']");
  target = target[0];
  //console.log("Target to change = " + target);
  if (localStorage.length === 2){
    // === 2 is a quick fix. FIX THE REST LATER!
    //console.log("Changing innerHTML...");
    target.innerHTML = localStorage.length - 1 + " piece of self-set homework. <br>";
  } else {
    if  (localStorage.length === 1) {
      target.innerHTML = "No Self-Set Homework";
    } else {
      // localStorage.length is a quick fix. FIX THE REST LATER!
      //console.log("Changing innerHTML...");
      target.innerHTML = localStorage.length - 1 + " pieces of self-set homework. <br>";
    }
  }
  var num = 0;
  for (var i in localStorage) {
    num = num + 1;
    var hwkData = JSON.parse(localStorage[i]);
    var hwkSubject = hwkData[0];
    var hwkTitle = hwkData[1];
    var hwkDue = hwkData[2];
    var hwkDesc = hwkData[3];
    //console.log("Homework data = " + hwkData);
    //console.log("Homework subject = " + hwkTitle);
    //console.log("Homework title = " + hwkTitle);
    //console.log("Homework due date = " + hwkDue);
    //console.log("Homework description = " + hwkDesc);
    addRowElement(hwkSubject, hwkTitle, hwkDue, hwkDesc, num);
  }
}

function addRowElement(subject, title, due, desc, num) {
  if (title) {
    var id = "selfSetHwk" + num;
    //var p = document.createElement("p");
    var p = "<br> <a onClick = 'delHwk(" + num + ")'> <b>" + subject + "</b>" + ": " + title + "</a> <br>" + desc + "<br> <b>Due on: </b>" + due + "<br>";
    var target = document.querySelectorAll("[title = 'translation missing: en.students.todo_items.school_events.no_announcements']");
    //console.log(p);
    target = target[0];
    //console.log("Appending child to " + target);
    //target.appendChild(p);
    target.innerHTML = target.innerHTML + p;
  }
}

function delHwk(num){
  var delConfirm = confirm ("Are you sure you want to delete the homework?");
  if (delConfirm) {
    num = num - 1;
    localStorage.removeItem("data" + num);
    updateHwk();
  }
}

console.log("Welcome to Show My Homework. The self-set homework extension is checking the page you are on...");
var address = window.location.href;
address = address.split("/");
if (address[3] === "student" && address.length === 4) {
  console.log("On ToDo page. Initialising...");
  init();
} else {
  console.log("Not on ToDo page. Finishing...");
  console.clear();
}
