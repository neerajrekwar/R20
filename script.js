// javascript

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

  document.getElementById("screen-fit").innerHTML =
    "Screen: " + myWidth + "x" + myHeight + " px";
};

function startTime() {
  const today = new Date();
  // let d = today.getMonth()+1;
  let now = new Date(2021, 3, 22).toLocaleDateString('en-uk', { year: "numeric", month: "long", weekday: "short", day: "numeric"});
  // let y = today.getFullYear(2021);
  // let h = today.getHours();
  // let m = today.getMinutes();
  let s = today.toLocaleTimeString();
  

  // m = checkTime(m);
  s = checkTime(s);
 
  
  document.getElementById('txt').innerHTML = now + "<br>";
  document.getElementById('txt1').innerHTML = s;
  // document.write('<br/>');
  setTimeout(startTime, 1000);

  document.createElement('br');
};

function checkTime(i) {
  if (i < 1) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
};






