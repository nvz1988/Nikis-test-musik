/* 📣 Niki's MusikBattle - Direkte start version */

/* 🎶 Lydsystem */
let soundOn = true;

const clickSound = new Audio("data:audio/wav;base64,UklGRkYAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQYAAAD//w8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw==");
const pointSound = new Audio("data:audio/wav;base64,UklGRkYAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQgAAAD//w8PDw8PDw8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8PDw8PDw8PDw8=");
const tadaSound = new Audio("data:audio/wav;base64,UklGRlIAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YVQAAACAgH9/gICAgICAgICAf39/f4CAgICAgH9/f39/f4CAgICAgH9/f39/f4CAgICAgH9/f39/f4CAgICAgICA");

function play(s){ if(soundOn) s.play(); }

/* 🔇 Lydknap */
document.addEventListener("click", e=>{
  if(e.target.id==="toggleSound"){
    soundOn=!soundOn;
    e.target.textContent = soundOn ? "🔊" : "🔇";
  }
});

/* 📊 Runder og spørgsmål */
const rounds = [
  {name:"Runde 1 — Gæt kunstner", questions:[
    {q:"Take On Me?", a:"A-ha", link:"https://youtu.be/djV11Xbc914"},
    {q:"Billie Jean?", a:"Michael Jackson", link:"https://youtu.be/Zi_XLOBDo_Y"},
    {q:"Hvor skal vi sove i nat?", a:"Laban", link:"https://youtu.be/mQriV5g5z5g"},
    {q:"Don’t Go?", a:"Yazoo", link:"https://youtu.be/_sQGwDeambg"},
    {q:"Slice Me Nice?", a:"Fancy", link:"https://youtu.be/N5qYF7LcLxY"},
    {q:"Girls on Film?", a:"Duran Duran", link:"https://youtu.be/oOg5VxrRTi0"},
    {q:"Vilde kaniner?", a:"Gnags", link:"https://youtu.be/Lj9G8xF8oTw"},
    {q:"Unfinished Sympathy?", a:"Massive Attack", link:"https://youtu.be/ZWmrfgj0MZI"},
    {q:"Smalltown Boy?", a:"Bronski Beat", link:"https://youtu.be/88sARuFu-tc"},
    {q:"To lys på et bord?", a:"Otto Brandenburg", link:"https://youtu.be/ea3gs7YQJ8Y"},
    {q:"Don’t Cry Tonight?", a:"Savage", link:"https://youtu.be/c1rG8kMmsf8"},
    {q:"Glor på vinduer?", a:"Anne Linnet", link:"https://youtu.be/5zFf6G5frAg"},
  ]}
];

/* 📌 Variabler */
let r=0, i=0, score=0;

/* 📌 Elementer */
const qEl = document.getElementById("question");
const aEl = document.getElementById("answer");
const sample = document.getElementById("sample");
const roundInfo = document.getElementById("roundInfo");

/* 📌 Indlæs spørgsmål */
function load(){
  const round = rounds[r];
  const item = round.questions[i];

  roundInfo.textContent = round.name;
  qEl.textContent = item.q;
  aEl.textContent = item.a;
  aEl.classList.add("hidden");
  sample.classList.remove("hidden");
  sample.href = item.link;
}

/* ➡️ Næste */
function next(){
  if(i < rounds[r].questions.length - 1){
    i++; load(); play(clickSound);
  } else end();
}

/* ⬅️ Tilbage */
function prev(){
  if(i>0){i--; load(); play(clickSound);}
}

/* 🏁 Runde slut */
function end(){
  document.getElementById("quiz-screen").style.display="none";
  document.getElementById("score-screen").style.display="block";
  document.getElementById("final-score").textContent = score;
  play(tadaSound);
}

/* 🔥 Start direkte */
document.getElementById("start-screen").style.display="none";
document.getElementById("quiz-screen").style.display="block";
load();

/* 🎛️ Knapper */
document.getElementById("nextBtn").onclick = next;
document.getElementById("prevBtn").onclick = prev;
document.getElementById("showBtn").onclick = ()=>{aEl.classList.remove("hidden");play(clickSound)};
document.getElementById("addPoint").onclick = ()=>{score++;play(pointSound)};
document.getElementById("undoPoint").onclick = ()=>{if(score>0)score--;play(clickSound)};
document.getElementById("nextRound").onclick = ()=>{location.reload()};
