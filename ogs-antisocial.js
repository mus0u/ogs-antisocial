function antisocialMain() {
  //grab the game chat container to be shown or hidden
  gameChatContainer = document.getElementById('game-chat-container');
  if (gameChatContainer == null) {
    if (window.location.href.indexOf('/game/') != -1) {
      // we're on a game page but it hasn't loaded yet, check back in 250 ms
      setTimeout(antisocialMain, 250);
    }
    return; // if not on a game page, just return early
  }
  //create a button with a text label for toggling chat visibility
  antisocialToggleButton = document.createElement('button');
  antisocialToggleButtonLabel = document.createTextNode('');
  antisocialToggleButton.appendChild(antisocialToggleButtonLabel);
  antisocialToggleButton.className = 'btn btn-xs btn-default bold';
  antisocialToggleButton.id = 'antisocial-toggle-button'

  //create a function for hiding the chat
  //and a companion function for showing the chat

  antisocialHideChat(); // start chat hidden

  //put the show or hide chat button in the game action buttons
  document.getElementById('game-action-buttons').appendChild(antisocialToggleButton);
}

function antisocialHideChat() {
  console.log("OGS Antisocial Mode: hiding chat.");
  gameChatContainer.style.display = 'none';
  antisocialToggleButtonLabel.nodeValue = 'Show chat';
  antisocialToggleButton.onclick = antisocialShowChat;
}

function antisocialShowChat() {
  console.log("OGS Antisocial Mode: showing chat.");
  gameChatContainer.style.display = 'flex';
  antisocialToggleButtonLabel.nodeValue = 'Hide chat';
  antisocialToggleButton.onclick = antisocialHideChat;
}

function antisocialDetectLocationChange() {
  if (window.location.href == antisocialCurrentLocation) { return; }

  antisocialCurrentLocation = window.location.href
  if (antisocialCurrentLocation.indexOf('/game/') != -1) {
    setTimeout(antisocialMain, 250);
  }
}

window.onload = function() {
  antisocialMain();
  antisocialCurrentLocation = window.location.href;
  setInterval(antisocialDetectLocationChange, 100);
  console.log('OGS Antisocial Mode: loaded.');
}
