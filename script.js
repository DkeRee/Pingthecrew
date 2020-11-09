var crew = ["Mostepic", "Grembles", "LGT Godfather", "Captin Autisimo", "CPL Cardilog", "Table Salt", "AE", "Karma", "Potato Salad", "wetassmaster", "1479tds", "Ark Sentinel", "Deletus", "TickDaSpider (bitch the)", "Accorum", "TAnnert"]

function pingCrew(){
  
  document.getElementById("pulser-crew").innerHTML = crew[Math.floor(Math.random() * 16 + 0)]

}

var click = 0;

function countClick(){
 
 click++

  document.getElementById("counter").innerHTML = "You have pinged " + click + " crew!";
   
}

