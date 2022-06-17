let keyword = document.getElementById('keyword')
let submit = document.getElementById('submit')

if(submit){
  submit.addEventListener('click', function () {

    let params = {
      active: true,
      currentWindow: true
    }
    
    chrome.tabs.query(params, gotTabs);
  
    function gotTabs(tabs) {
      let msg = {
        txt: keyword.value
      }
      
      chrome.tabs.sendMessage(tabs[0].id, msg)
    }
    // keyword.value = ''
  })

}
