alert('hi');

const button = document.getElementById('myButton');
const a = document.getElementByClassName('a');
const s = document.getElementByClassName('s');
const d = document.getElementByClassName('d');
const j= document.getElementByClassName('j');
const k = document.getElementByClassName('k');
const l =document.getElementByClassName('l');

const audio = document.getElementById('wAudio');
button.addEventListener("click", handleW());
a.addEventListener("click", handleW());
s.addEventListener("click", handleW());
d.addEventListener("click", handleW());
j.addEventListener("click", handleW());
k.addEventListener("click", handleW());
l.addEventListener("click", handleW());


function handleW() {
audio.play();
}
