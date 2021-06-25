google.load("feeds", "1"); 
google.setOnLoadCallback(function() { 
    
var feed = new google.feeds.Feed("http://rss.exblog.jp/rss/exblog/bistroblog/atom.xml"); 
    
feed.setNumEntries(4); 
    
feed.load(function(result) {         
if (!result.error) { 
           
var ul = document.createElement("ul"); 
            
for (var i = 0; i < result.feed.entries.length; i++) { 
                
var entry = result.feed.entries[i]; 
               
var li = document.createElement("li"); 
               
var a  = document.createElement("a"); 
                
a.setAttribute("title", entry.title); 
                
a.setAttribute("href",  entry.link); 
                
a.appendChild(document.createTextNode(entry.title)); 
                
li.appendChild(a); 
                
ul.appendChild(li); 
           
} 
            
var container = document.getElementById("feed");            
container.appendChild(ul);         
}     
}); 
});