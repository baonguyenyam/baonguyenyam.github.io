google.load("feeds", "1"); 


function initialize()
{ 


// 現在の日付と時間を取得
var date = new Date();
var year = date.getYear();
var mon = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

var query = year + mon + day + hour + min + sec;

//現在の最新RSSフィードの取得
var feed = new google.feeds.Feed("http://eight.ldblog.jp/index.rdf" ); 

//取得するフィード数
feed.setNumEntries(5) 

//実際に読む込む
feed.load(function(result) 
{ 

//読み込めたか判別
if (!result.error) 
{
//表示部分を選択
var container = document.getElementById("feed");

//変数の初期化
var list = "";

//Feedの処理
list = '<ul>';
for (var i = 0; i < result.feed.entries.length; i++) 
{ 
//Feedを一つ抽出
var entry = result.feed.entries[i]; 
if(entry.title.match(/^PR:/)) {
//「PR:」から始まるものがあれば何もしない
}
else{
list += '<li>';
var strdate = createDateString(entry.publishedDate);

list += '<a href="' + entry.link + '" target="_blank" title="' + entry.title + '">' + entry.title + '</a>';

list += '</li>';
}
} 
list += '</ul>';
container.innerHTML = list;
} 
}); 
}


//日付の表示方法を変更
function createDateString(publishedDate)
{
var pdate = new Date(publishedDate);
var pday = pdate.getDate();
var pmonth = pdate.getMonth() + 1;
var pyear = pdate.getFullYear();
var phour = pdate.getHours();
var pminute = pdate.getMinutes();
var psecond = pdate.getSeconds(); 
//var strdate = pyear + "年" + pmonth + "月" + pday + "日" + phour + "時" + pminute + "分" + psecond + "秒";
var strdate = pyear + "-" + pmonth + "-" + pday ;
return strdate;
}


google.setOnLoadCallback(initialize); 