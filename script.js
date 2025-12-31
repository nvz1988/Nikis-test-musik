/* Runder */
let soundOn=true;
const click=new Audio("data:audio/wav;base64,UklGRkYAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQYAAAD//w8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw==");
const point=new Audio("data:audio/wav;base64,UklGRkYAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQgAAAD//w8PDw8PDw8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8PDw8PDw8PDw8=");
const tada=new Audio("data:audio/wav;base64,UklGRlIAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YVQAAACAgH9/gICAgICAgICAf39/f4CAgICAgH9/f39/f4CAgICAgH9/f39/f4CAgICAgH9/f39/f4CAgICAgICA");
function play(s){if(soundOn)s.play();}
document.getElementById("toggleSound").onclick=()=>{soundOn=!soundOn;toggleSound.textContent=soundOn?"🔊":"🔇";};

let rounds=[
{name:"Runde 1 — Gæt kunstner",questions:[
{q:"Take On Me?",a:"A-ha",link:"https://youtu.be/djV11Xbc914"},
{q:"Billie Jean?",a:"Michael Jackson",link:"https://youtu.be/Zi_XLOBDo_Y"}]},
{name:"Runde 2 — Gæt kunstner",questions:[
{q:"Hungry Like The Wolf?",a:"Duran Duran",link:"https://youtu.be/oOg5VxrRTi0"},
{q:"Smalltown Boy?",a:"Bronski Beat",link:"https://youtu.be/88sARuFu-tc"}]}
];

let r=0,i=0,score=0;

const roundInfo=document.getElementById("roundInfo"),
qEl=document.getElementById("question"),
aEl=document.getElementById("answer"),
sample=document.getElementById("sample");

function load(){
roundInfo.textContent=rounds[r].name;
let cur=rounds[r].questions[i];
qEl.textContent=cur.q;
aEl.classList.add("hidden");
aEl.textContent=cur.a;
sample.innerHTML=`<a href="${cur.link}" target="_blank">🎧 Hør sample</a>`;
}
function next(){
if(i<rounds[r].questions.length-1){i++;load();}
else end();
}
function prev(){if(i>0){i--;load();}}
function end(){
quiz-screen.style.display="none";
score.style.display="block";
document.getElementById("scoreboard").innerHTML=`Point: ${score}`;
play(tada);
}
document.getElementById("startGame").onclick=()=>{start-screen.classList.add("hidden");quiz-screen.classList.remove("hidden");load();}
document.getElementById("nextBtn").onclick=()=>{play(click);next();}
document.getElementById("prevBtn").onclick=()=>{play(click);prev();}
document.getElementById("showBtn").onclick=()=>{play(click);aEl.classList.remove("hidden");}
document.getElementById("addPoint").onclick=()=>{score++;play(point);}
document.getElementById("undoPoint").onclick=()=>{if(score>0)score--;}
document.getElementById("nextRound").onclick=()=>{r++;i=0;score=score;score.style;startRound();};

