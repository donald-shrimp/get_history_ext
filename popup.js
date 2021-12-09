console.log("うんち");


//idが登録されていた場合は入力バーに入れておく
let defaultid = localStorage.getItem('uid');
if (defaultid != null) {
    document.getElementById("stunum").value = defaultid ;
}

//利用開始ボタンが押されたら値を取得しlocalstorageに渡す(拡張機能のローカルストレージは「ポップアップを検証」のところからしか確認できないため注意)
document.getElementById("use_start").onclick = function() {
    let uid = document.getElementById('stunum').value;
    console.log(uid);
    localStorage.setItem('uid', uid);
    localStorage.setItem('url', 'none');
    localStorage.setItem('title', 'none');
    alert("登録完了！適当な場所をクリックするとポップアップは消えます")
}

