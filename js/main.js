(function(){var b=document.querySelector(".burger"),l=document.querySelector(".links");
b.addEventListener("click",function(){var o=l.classList.toggle("open");b.setAttribute("aria-expanded",o)});
l.addEventListener("click",function(e){if(e.target.tagName==="A")l.classList.remove("open")});
var f=document.getElementById("cf");f.addEventListener("submit",function(e){e.preventDefault();
var t="Assalam-o-Alaikum! I am "+(f.n.value.trim()||"a website visitor")+".\nProject: "+f.t.value+"\nDetails: "+(f.m.value.trim()||"-");
window.open("https://wa.me/923322964709?text="+encodeURIComponent(t),"_blank")});
document.getElementById("y").textContent=new Date().getFullYear()})();
