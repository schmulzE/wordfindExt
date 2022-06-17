function gotMessage(message, sender, sendResponse) {

  let searchedWord = message.txt
 
  var string = new RegExp(searchedWord, 'ig')
  
  searchText(document.body)
  
  function searchText(element) {
    if (element.hasChildNodes()){
      element.childNodes.forEach(searchText)
    } else if (element.nodeType === Text.TEXT_NODE) {
      if(element.textContent.match(string)) {
        element.parentElement.style.backgroundColor = "yellow"
        element.parentElement.style.color = "red"
      }
    }
  }

}


chrome.runtime.onMessage.addListener(gotMessage);