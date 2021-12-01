

//履歴を取得してコンソールに出す
chrome.history.onVisited.addListener(async(result) => {
  const historyItem = result;

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  
  //tabの情報を取得()　
  console.log(historyItem.title);
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
  console.log(localStorage.getItem('uid'));

  if (localStorage.getItem('url') === historyItem.url||localStorage.getItem('title') === historyItem.title) { //localstorageに格納された値と違うURLを取得した場合のみJSON送信
    console.log("おなじだよ")
  }else if(historyItem.url===''||historyItem.url===''||historyItem.url==='https://music.amazon.co.jp/'||historyItem.url==='https://www.youtube.com/'||historyItem.url==='https://www.youtube.com/?gl=JP&hl=ja'||historyItem.title==='Amazon | 本, ファッション, 家電から食品まで | アマゾン'||historyItem.url==='https://www.google.com/'||historyItem.url==='https://www.yahoo.co.jp/'||historyItem.url.indexOf('133.43.7.172') > -1||historyItem.url.indexOf('https://portal.upex.ce.nihon-u.ac.jp') > -1||historyItem.url.indexOf('localhost') > -1){ 
    console.log("除外だよ")
  }else {
    console.log("送信するよ")
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
  }

})


