
function getTitle() {
  new Promise((resolve, reject) => {
    //ここでエラーがめっちゃ出ます！うんち！！
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      
      resolve(tabs[0].title);
      
      reject('すまんこ！(笑)');
    });
    
  })

}


//履歴を取得してコンソールに出す
chrome.history.onVisited.addListener(async(result) => {
  const historyItem = result;

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  //tabの情報を取得(historyItemをつかうのはやめた)
  
　const title = await getTitle();
  console.log(historyItem.title);
  console.log(title);
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
  console.log(localStorage.getItem('uid'));

  if (localStorage.getItem('url') !== historyItem.url||localStorage.getItem('title') !== historyItem.title) { //localstorageに格納された値と違うURLを取得した場合のみJSON送信
    console.log("ちがうよ")
    const json = JSON.stringify(
      {
        "title": historyItem.title,
        "url": historyItem.url,
        "date": new Date(historyItem.lastVisitTime),
        "uid": localStorage.getItem('uid')
      }
    );

    console.log(json)

    fetch("http://133.43.7.172:8080", { method: 'post', headers: headers, body: json }).then((res) => {
      // レスポンスをコンソールに表示
      res.text().then(console.log)
    })

    //新たなURLを設定
    localStorage.setItem('url', historyItem.url);
    localStorage.setItem('title', historyItem.title);
  } else {
    console.log("おなじだよ")
  }

})


