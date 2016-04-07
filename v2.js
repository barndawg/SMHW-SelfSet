function init() {

  // Set variable to SMHW-SS localStorage item. If nonexistent, create it and add it to localStorage
  var storage = localStorage['SMHW-SelfSet'];
  if (storage === undefined) {
    storage = {
      hwk: {},
      complete: {},
      viewHwk: false
    };
    storage = JSON.stringify(storage);
    localStorage.setItem('SMHW-SelfSet', storage);
  }

  // Check address to see if it's the gradebook. If viewHwk is true, start selfSet function.
  var address = window.location.href;
  address = address.split('/');
  if (address[3] === 'gradebook') {
    if (storage.viewHwk === true) {
      storage.viewHwk = false;
      storage = JSON.stringify(storage);
      localStorage.setItem('SMHW-SelfSet', storage);
      selfSet();
    }
  }

  // Add button to page (regardless of address) for SelfSet
  var buttonsList = document.getElementsByClassName('sidebar-nav');
  buttonsList = buttonsList[0];
  var newButton = document.createElement('li');
  var link = document.createElement('a');
  link.appendChild(document.createTextNode('Self-Set Homework'));
  link.onClick = gotoSelfSet();
  newButton.appendChild(link);
  buttonsList.appendChild(newButton);

}

function gotoSelfSet() {
  // Make sure that the selfSet function will work when going to the gradebook, then redirect.
  var storage = localStorage['SMHW-SelfSet'];
  storage = JSON.parse(storage);
  storage.viewHwk = true;
  storage = JSON.stringify(storage);
  localStorage.setItem('SMHW-SelfSet', storage);
  window.location.href = '/gradebook';
}

function selfSet () {
  alert ('This is where self set homework will appear and be added / deleted');
}

init();
