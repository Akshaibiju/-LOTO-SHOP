function addItem(){
    var candidate = document.getElementById("candidate");
    location.replace("web/redirection/store.html");
    var ul = document.getElementById("dynamic-list");
    
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    li.appendChild(document.createElement(img));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}

function ipone(){
    location.replace("web/module/ipone.html");
}

function home(){
    location.replace("index.html");
}