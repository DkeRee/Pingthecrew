var crew = ["Mostepic", "Grembles", "LGT Godfather", "Captin Autisimo", "CPL Cardilog", "Table Salt", "AE", "Karma", "Potato Salad", "wetassmaster", "1479tds", "Ark Sentinel", "Deletus", "TickDaSpider (bitch the)", "Accorum", "TAnnert", "hunter (best admin!!)", "Bigman"]

function pingCrew(){
  
  document.getElementById("pulser-crew").innerHTML = crew[Math.floor(Math.random() * 18 + 0)]

}

var click = 0;


function countClick(){

  
if (click === 100){
  alert("Arent you spending too much time on this?")
}

if (click === 500){
  alert("Bruh, don't you have to go do some chores or something xD")
  document.getElementById("flashbang").style.display = 'block';
}

if (click === 1000){
  alert("get a life LOL")
}

if (click === 5000){
  alert(";-;")
}

if (click === 10000){
  alert("you HAVE to be using an autoclicker man xD. You deserve it, here take a waifu")
  document.getElementById("waifu").style.display = 'block';
}
 
 click++

  document.getElementById("counter").innerHTML = "You have pinged " + click + " crew!";
   
}


function playDiscord(){

  var sound = document.getElementById("discord-audio")
  sound.play();


}

