// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.sync.set({ color: '#3aa757' }, function () {
//     console.log('The color is green.');
//   });

//   // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//   //   chrome.declarativeContent.onPageChanged.addRules([{
//   //     conditions: [new chrome.declarativeContent.PageStateMatcher({
//   //       pageUrl: { hostEquals: 'developer.chrome.com' },
//   //     })
//   //     ],
//   //     actions: [new chrome.declarativeContent.ShowPageAction()]
//   //   }]);
//   // });

// });

//履歴を取得してコンソールに出す


chrome.history.onVisited.addListener((result) => {
  // var tab_title;
  
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   var tab = tabs[0];
  //   var title = tab.title;
  //   console.log("Title: " + title);
  //   tab_title = title;
    
  // });

  const historyItem = result;
  console.log(historyItem.title);
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
  console.log(localStorage.getItem('uid'));

  const json = JSON.stringify({
                              "title":historyItem.title,
                              "url":historyItem.url,
                              "date":new Date(historyItem.lastVisitTime),
                              "uid":localStorage.getItem('uid') 
                              });
  
  console.log(json)
  $.ajax({
    type: "POST",
    url: "http://localhost:8080",
    dataType: "json",
    contentType: "application/json",
    data: json
})

})


