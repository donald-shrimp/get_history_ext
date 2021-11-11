//履歴を取得してコンソールに出す
chrome.history.onVisited.addListener((result) => {
  const historyItem = result;
  console.log(historyItem.title);
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
  console.log(localStorage.getItem('uid'));

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if (localStorage.getItem('url') !== historyItem.url) { //localstorageに格納された値と違うURLを取得した場合のみJSON送信
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

  } else {
    console.log("おなじだよ")
  }

})


