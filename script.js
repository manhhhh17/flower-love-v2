const intro=document.getElementById("intro");
const garden=document.getElementById("garden");
const openBtn=document.getElementById("openBtn");
const typing=document.getElementById("typing");
const title=document.getElementById("title");
const subtitle=document.getElementById("subtitle");
const loveMessage=document.getElementById("loveMessage");

const introText="I Have Something";
let p=0;
function typeIntro(){
  if(p<introText.length){
    typing.textContent+=introText[p++];
    setTimeout(typeIntro,85);
  }
}
typeIntro();

function spark(x=Math.random()*innerWidth,y=innerHeight+10,burst=false){
  const s=document.createElement("span");
  s.className="spark";
  const size=Math.random()*4+2;
  s.style.width=size+"px";s.style.height=size+"px";
  s.style.left=(x+(burst?(Math.random()-.5)*200:0))+"px";
  s.style.top=(y+(burst?(Math.random()-.5)*150:0))+"px";
  const d=burst?Math.random()*.9+.7:Math.random()*5+4;
  s.style.animationDuration=d+"s";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),d*1000);
}

function heart(x,y){
  const h=document.createElement("span");
  h.className="heart";
  h.textContent=Math.random()>.2?"♥":"✦";
  h.style.left=(x+(Math.random()-.5)*70)+"px";
  h.style.top=(y+(Math.random()-.5)*25)+"px";
  h.style.fontSize=(Math.random()*14+12)+"px";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),3000);
}

openBtn.addEventListener("click",()=>{
  for(let i=0;i<45;i++) spark(innerWidth/2,innerHeight/2,true);
  intro.classList.remove("active");
  setTimeout(()=>garden.classList.add("active"),500);

  setTimeout(()=>animateFlowers(),900);
  setTimeout(()=>typeTitle(),1500);
  setTimeout(()=>loveMessage.classList.add("show"),5200);
});

function animateFlowers(){
  document.querySelectorAll(".flower").forEach((f,i)=>{
    setTimeout(()=>f.classList.add("grow"),i*430);
  });
}

const finalTitle="I LOVE U BABE";
let ti=0;
function typeTitle(){
  if(ti<finalTitle.length){
    title.textContent+=finalTitle[ti++];
    setTimeout(typeTitle,100);
  }else{
    setTimeout(()=>subtitle.classList.add("show"),300);
    subtitle.textContent="every flower blooms for you ✦";
  }
}

setInterval(()=>spark(),170);

for(let i=0;i<18;i++){
  const f=document.createElement("span");
  f.className="firefly";
  f.style.left=Math.random()*100+"vw";
  f.style.top=(25+Math.random()*65)+"vh";
  f.style.animationDuration=(3+Math.random()*4)+"s";
  f.style.animationDelay=(-Math.random()*5)+"s";
  document.getElementById("fireflies").appendChild(f);
}

document.addEventListener("click",e=>{
  if(!garden.classList.contains("active") || e.target===openBtn)return;
  for(let i=0;i<4;i++)heart(e.clientX,e.clientY);
});
