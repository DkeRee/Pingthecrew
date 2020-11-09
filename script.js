var crew = ["Mostepic", "Grembles", "LGT Godfather", "Captin Autisimo", "CPL Cardilog", "Table Salt", "AE", "Karma", "Potato Salad", "wetassmaster", "1479tds", "Ark Sentinel", "Deletus", "TickDaSpider (bitch the)", "Accorum", "TAnnert", "hunter (best admin!!)", "Bigman"]

function pingCrew(){
  
  document.getElementById("pulser-crew").innerHTML = crew[Math.floor(Math.random() * 18 + 0)]

}

var click = 0;

function countClick(){
 
 click++

  document.getElementById("counter").innerHTML = "You have pinged " + click + " crew!";
   
}


function playDiscord(){

  var sound = document.getElementById("discord-audio")
  sound.play();


}

