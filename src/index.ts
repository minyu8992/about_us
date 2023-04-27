function mouseover(Oarea, Larea, intro){
  document.getElementById(Oarea).style.display = "none";
  document.getElementById(Larea).style.display = "block";
  document.getElementById(intro).style.display = "block";
  document.getElementById('dark_background').style.display = "block";
}

function mouseout(Oarea, Larea, intro){
  document.getElementById(Oarea).style.display = "block";
  document.getElementById(Larea).style.display = "none";
  document.getElementById(intro).style.display = "none";
  document.getElementById('dark_background').style.display = "none";
}
