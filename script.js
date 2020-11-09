var crew = ["Mostepic", "Grembles", "LGT Godfather", "Captin Autisimo", "CPL Cardilog", "Table Salt", "AE", "Karma", "Potato Salad", "wetassmaster", "1479tds", "Ark Sentinel", "Deletus",]

function pingCrew(){
  
  document.getElementById("pulser-crew").innerHTML = crew[Math.floor(Math.random() * 13 + 0)]

}

