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
  const historyItem = result;
  console.log(historyItem.title);
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
})


