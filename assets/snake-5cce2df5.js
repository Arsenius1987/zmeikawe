import"./style-e5ec309f.js";const g=document.getElementById("game"),v=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];var c=new Audio("z_uk-kushaet.mp3");const y=e=>{const t=[];for(let n of e)t.push([...n]);return t};let s=y(v),u=!1,i=[{x:7,y:7,d:"",lastD:""}],r=!1,o="",l="";function f(){const e=Math.floor(Math.random()*15),t=Math.floor(Math.random()*15);s[e][t]?f():s[e][t]=2}function a(){if(r){let t=i[0].x,n=i[0].y,d="";if(s[i[i.length-1].x][i[i.length-1].y]=0,l=="u"&&(t--,d="d"),l=="r"&&(n++,d="l"),l=="d"&&(t++,d="u"),l=="l"&&(n--,d="r"),t<0||t>s.length-1||n<0||n>s.length-1||s[t][n]==1){r=!1,i.length=1,i[0].x=7,i[0].y=7,l="",o="",s=y(v),f(),a();return}s[t][n]==2&&(c.pause(),c.currentTime=0,i.push({x:t,y:n,d,lastD:o}),c.play(),f()),i.unshift({x:t,y:n,d,lastD:o}),i.pop(),s[t][n]=1,o=d,u||setTimeout(a,500)}let e="";for(let t=0;t<s.length;t++)for(let n=0;n<s[t].length;n++)if(s[t][n]==1)if(i.length==1)l?e+=`<div class="snake single ${l}"></div>`:e+='<div class="snake round"></div>';else if(t==i[0].x&&n==i[0].y)e+=`<div class="snake ${l}"></div>`;else if(t==i[i.length-1].x&&n==i[i.length-1].y)e+=`<div class="snake tail ${i[i.length-1].d}"></div>`;else{let d=i.find(h=>h.x==t&&h.y==n);d?e+=`<div class="snake ${d.d}${d.lastD}"></div>`:e+='<div class="snake"></div>'}else s[t][n]==2?e+='<div class="rabbit"></div>':e+="<div></div>";g.innerHTML=e}f();a();document.addEventListener("keydown",e=>{r||(r=!0,a()),(e.code=="ArrowUp"||e.code=="KeyW")&&l!="d"&&(l="u"),(e.code=="ArrowRight"||e.code=="KeyD")&&l!="l"&&(l="r"),(e.code=="ArrowDown"||e.code=="KeyS")&&l!="u"&&(l="d"),(e.code=="ArrowLeft"||e.code=="KeyA")&&l!="r"&&(l="l"),e.code=="KeyP"&&(u=!u,a())});