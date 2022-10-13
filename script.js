


function botaoHOME() {
var x = window.matchMedia("(max-width: 540px)")
var Y = window.matchMedia("(max-width: 912px)")
document.getElementById("PagHome").style.display = "flex";
document.getElementById("PagDest").style.display = "none";
document.getElementById("PagCrew").style.display = "none";
document.getElementById("PagCrewM").style.display = "none";
document.getElementById("PagTec").style.display = "none";
document.getElementById("PagTecM").style.display = "none";
document.getElementById("Cellmenu").style.display = "none";
document.getElementById("BtnH").style.borderColor  = "white";
document.getElementById("BtnD").style.borderColor  = "transparent";
document.getElementById("BtnC").style.borderColor  = "transparent";
document.getElementById("BtnT").style.borderColor  = "transparent";

if (x.matches) {
   document.getElementById("BtnIcon").style.display = "block";
   document.body.style.backgroundImage = "url('HomeTablet.png')";
} else {
   document.getElementById("BtnIcon").style.display = "none";
   document.body.style.backgroundImage = "url('Ftest.png')";
}
if (Y.matches) {
   document.body.style.backgroundImage = "url('HomeTablet.png')";
} else {
   document.body.style.backgroundImage = "url('Ftest.png')";
}
}

function botaoDEST() {
var x = window.matchMedia("(max-width: 540px)")
document.getElementById("PagHome").style.display = "none";
document.getElementById("PagDest").style.display = "flex";
document.body.style.backgroundImage = "url('PagDEST.png')";
document.getElementById("PagCrew").style.display = "none";
document.getElementById("PagCrewM").style.display = "none";
document.getElementById("PagTec").style.display = "none";
document.getElementById("PagTecM").style.display = "none";
document.getElementById("Cellmenu").style.display = "none";
document.getElementById("BtnH").style.borderColor  = "transparent";
document.getElementById("BtnD").style.borderColor  = "white";
document.getElementById("BtnC").style.borderColor  = "transparent";
document.getElementById("BtnT").style.borderColor  = "transparent";

if (x.matches) {
   document.getElementById("BtnIcon").style.display = "block";
} else {
   document.getElementById("BtnIcon").style.display = "none";
}
}

function botaoCREW() {
var x = window.matchMedia("(max-width: 540px)")
document.getElementById("PagHome").style.display = "none";
document.getElementById("PagDest").style.display = "none";
document.body.style.backgroundImage = "url('pagCREW.png')";
document.getElementById("PagTec").style.display = "none";
document.getElementById("PagTecM").style.display = "none";
document.getElementById("Cellmenu").style.display = "none";
document.getElementById("BtnH").style.borderColor  = "transparent";
document.getElementById("BtnD").style.borderColor  = "transparent";
document.getElementById("BtnC").style.borderColor  = "white";
document.getElementById("BtnT").style.borderColor  = "transparent";

if (x.matches) {
   document.getElementById("BtnIcon").style.display = "block";
   document.getElementById("PagCrewM").style.display = "flex";
   document.getElementById("PagCrew").style.display = "none";
} else {
   document.getElementById("BtnIcon").style.display = "none";
   document.getElementById("PagCrewM").style.display = "none";
   document.getElementById("PagCrew").style.display = "flex";
}
}

function botaoTEC() {
var x = window.matchMedia("(max-width: 540px)")
var Y = window.matchMedia("(max-width: 912px)")
document.getElementById("PagHome").style.display = "none";
document.getElementById("PagDest").style.display = "none";
document.body.style.backgroundImage = "url('pagTEC.png')";
document.getElementById("PagCrew").style.display = "none";
document.getElementById("PagCrewM").style.display = "none";
document.getElementById("Cellmenu").style.display = "none";
document.getElementById("BtnH").style.borderColor  = "transparent";
document.getElementById("BtnD").style.borderColor  = "transparent";
document.getElementById("BtnC").style.borderColor  = "transparent";
document.getElementById("BtnT").style.borderColor  = "white";

if (x.matches) {
   document.getElementById("BtnIcon").style.display = "block";
   document.getElementById("PagTecM").style.display = "flex";
   document.getElementById("PagTec").style.display = "none";
} else {

   document.getElementById("BtnIcon").style.display = "none";
   document.getElementById("PagTecM").style.display = "none";
   document.getElementById("PagTec").style.display = "flex";
}

if (Y.matches) {
   document.getElementById("PagTecM").style.display = "flex";
   document.getElementById("PagTec").style.display = "none";
} else {
   document.getElementById("PagTecM").style.display = "none";
   document.getElementById("PagTec").style.display = "flex";
}


}

function botaoCELL() {

document.getElementById("PagHome").style.display = "none";
document.getElementById("PagDest").style.display = "none";
document.getElementById("PagCrew").style.display = "none";
document.getElementById("PagTec").style.display = "none";
document.getElementById("Cellmenu").style.display = "flex";
document.getElementById("BtnIcon").style.display = "none";
document.getElementById("PagTecM").style.display = "none";

}

function botaoX() {
 
var x = window.matchMedia("(max-width: 540px)")
var Y = window.matchMedia("(max-width: 912px)")
document.getElementById("PagHome").style.display = "flex";
document.body.style.backgroundImage = "url('Ftest.png')";
document.getElementById("PagDest").style.display = "none";
document.getElementById("PagCrew").style.display = "none";
document.getElementById("PagCrewM").style.display = "none";
document.getElementById("PagTec").style.display = "none";
document.getElementById("PagTecM").style.display = "none";
document.getElementById("Cellmenu").style.display = "none";
document.getElementById("BtnIcon").style.display = "block";

if (x.matches) {
   document.getElementById("BtnIcon").style.display = "block";
   document.body.style.backgroundImage = "url('HomeTablet.png')";
} else {
   document.getElementById("BtnIcon").style.display = "none";
   document.body.style.backgroundImage = "url('Ftest.png')";
}
if (Y.matches) {
   document.body.style.backgroundImage = "url('HomeTablet.png')";
} else {
   document.body.style.backgroundImage = "url('Ftest.png')";
}
}


function ChecaMOBILE(){
var x = window.matchMedia("(max-width: 540px)")
var Y = window.matchMedia("(max-width: 912px)")
if (x.matches) {
   document.location.reload();
   document.body.style.backgroundImage = "url('HomeTablet.png')";
} else {
   document.getElementById("BtnIcon").style.display = "none";
   document.body.style.backgroundImage = "url('Ftest.png')";
}

if (Y.matches) {
   document.body.style.backgroundImage = "url('HomeTablet.png')";
} else {
   document.body.style.backgroundImage = "url('Ftest.png')";
}
}


function botaoMoon() {
document.getElementById("planeta").src = "MOON.png";;
document.getElementById("planetname").innerHTML = "MOON";
document.getElementById("txt2").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
document.getElementById("KMcont").innerHTML = "384,400 KM";
document.getElementById("TIMEcont").innerHTML = "3 DAYS";
document.getElementById("BtnMoon").style.borderColor  = "white";
document.getElementById("BtnMars").style.borderColor  = "transparent";
document.getElementById("BtnEuropa").style.borderColor  = "transparent";
document.getElementById("BtnTitan").style.borderColor  = "transparent";


}

function botaoMars() {
document.getElementById("planeta").src = "MARS.png";;
document.getElementById("planetname").innerHTML = "MARS";
document.getElementById("txt2").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
document.getElementById("KMcont").innerHTML = "225 MIL. KM";
document.getElementById("TIMEcont").innerHTML = "9 MONTHS";
document.getElementById("BtnMoon").style.borderColor  = "transparent";
document.getElementById("BtnMars").style.borderColor  = "white";
document.getElementById("BtnEuropa").style.borderColor  = "transparent";
document.getElementById("BtnTitan").style.borderColor  = "transparent";

}

function botaoEuropa() {
document.getElementById("planeta").src = "EUROPA.png";;
document.getElementById("planetname").innerHTML = "EUROPA";
document.getElementById("txt2").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
document.getElementById("KMcont").innerHTML = "628 MIL. KM";
document.getElementById("TIMEcont").innerHTML = "3 YEARS";
document.getElementById("BtnMoon").style.borderColor  = "transparent";
document.getElementById("BtnMars").style.borderColor  = "transparent";
document.getElementById("BtnEuropa").style.borderColor  = "white";
document.getElementById("BtnTitan").style.borderColor  = "transparent";


}

function botaoTitan() {
document.getElementById("planeta").src = "TITAN.png";;
document.getElementById("planetname").innerHTML = "TITAN";
document.getElementById("txt2").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
document.getElementById("KMcont").innerHTML = "1.6 BIL. KM";
document.getElementById("TIMEcont").innerHTML = "7 YEARS";
document.getElementById("BtnMoon").style.borderColor  = "transparent";
document.getElementById("BtnMars").style.borderColor  = "transparent";
document.getElementById("BtnEuropa").style.borderColor  = "transparent";
document.getElementById("BtnTitan").style.borderColor  = "white";


}

function botaoB1M() {
document.getElementById("PessoaM").src = "COMMANDER.png";
document.getElementById("rankM").innerHTML = "COMMANDER";
document.getElementById("PnameM").innerHTML = "DOUGLAS HURLEY";
document.getElementById("txt3M").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
document.getElementById("BtnB1M").style.backgroundColor  = "white";
document.getElementById("BtnB2M").style.backgroundColor  = "black";
document.getElementById("BtnB3M").style.backgroundColor  = "black";
document.getElementById("BtnB4M").style.backgroundColor  = "black";
}

function botaoB2M() {
document.getElementById("PessoaM").src = "MISSION.png";
document.getElementById("rankM").innerHTML = "MISSION SPECIALIST";
document.getElementById("PnameM").innerHTML = "MARK SHUTTLEWORTH";
document.getElementById("txt3M").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
document.getElementById("BtnB1M").style.backgroundColor  = "black";
document.getElementById("BtnB2M").style.backgroundColor  = "white";
document.getElementById("BtnB3M").style.backgroundColor  = "black";
document.getElementById("BtnB4M").style.backgroundColor  = "black";
}

function botaoB3M() {
document.getElementById("PessoaM").src = "PILOT.png";
document.getElementById("rankM").innerHTML = "PILOT";
document.getElementById("PnameM").innerHTML = "VICTOR GLOVER";
document.getElementById("txt3M").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
document.getElementById("BtnB1M").style.backgroundColor  = "black";
document.getElementById("BtnB2M").style.backgroundColor  = "black";
document.getElementById("BtnB3M").style.backgroundColor  = "white";
document.getElementById("BtnB4M").style.backgroundColor  = "black";
}

function botaoB4M() {
document.getElementById("PessoaM").src = "ENGINEER.png";
document.getElementById("rankM").innerHTML = "FLIGHT ENGINEER";
document.getElementById("PnameM").innerHTML = "ANOUSHEH ANSARI";
document.getElementById("txt3M").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
document.getElementById("BtnB1M").style.backgroundColor  = "black";
document.getElementById("BtnB2M").style.backgroundColor  = "black";
document.getElementById("BtnB3M").style.backgroundColor  = "black";
document.getElementById("BtnB4M").style.backgroundColor  = "white";
}

function botaoB1() {
document.getElementById("Pessoa").src = "COMMANDER.png";
document.getElementById("rank").innerHTML = "COMMANDER";
document.getElementById("Pname").innerHTML = "DOUGLAS HURLEY";
document.getElementById("txt3").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
document.getElementById("BtnB1").style.backgroundColor  = "white";
document.getElementById("BtnB2").style.backgroundColor  = "black";
document.getElementById("BtnB3").style.backgroundColor  = "black";
document.getElementById("BtnB4").style.backgroundColor  = "black";
}

function botaoB2() {
document.getElementById("Pessoa").src = "MISSION.png";
document.getElementById("rank").innerHTML = "MISSION SPECIALIST";
document.getElementById("Pname").innerHTML = "MARK SHUTTLEWORTH";
document.getElementById("txt3").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
document.getElementById("BtnB1").style.backgroundColor  = "black";
document.getElementById("BtnB2").style.backgroundColor  = "white";
document.getElementById("BtnB3").style.backgroundColor  = "black";
document.getElementById("BtnB4").style.backgroundColor  = "black";
}

function botaoB3() {
document.getElementById("Pessoa").src = "PILOT.png";
document.getElementById("rank").innerHTML = "PILOT";
document.getElementById("Pname").innerHTML = "VICTOR GLOVER";
document.getElementById("txt3").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
document.getElementById("BtnB1").style.backgroundColor  = "black";
document.getElementById("BtnB2").style.backgroundColor  = "black";
document.getElementById("BtnB3").style.backgroundColor  = "white";
document.getElementById("BtnB4").style.backgroundColor  = "black";
}

function botaoB4() {
document.getElementById("Pessoa").src = "ENGINEER.png";
document.getElementById("rank").innerHTML = "FLIGHT ENGINEER";
document.getElementById("Pname").innerHTML = "ANOUSHEH ANSARI";
document.getElementById("txt3").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
document.getElementById("BtnB1").style.backgroundColor  = "black";
document.getElementById("BtnB2").style.backgroundColor  = "black";
document.getElementById("BtnB3").style.backgroundColor  = "black";
document.getElementById("BtnB4").style.backgroundColor  = "white";
}

function botaoT1() {
   document.getElementById("nave").src = "Bitmap (2).png";
   document.getElementById("ran").innerHTML = "THE TERMINOLOGY...";
   document.getElementById("TecTitle").innerHTML = "LAUNCH VEHICLE";
   document.getElementById("LV").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
   document.getElementById("BtnTEC1").style.backgroundColor  = "white";
   document.getElementById("BtnTEC1").style.color  = "black";
   document.getElementById("BtnTEC2").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC2").style.color  = "white";
   document.getElementById("BtnTEC3").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC3").style.color  = "white";
   }

function botaoT2() {
   document.getElementById("nave").src = "TE03.png";
   document.getElementById("ran").innerHTML = "THE TERMINOLOGY...";
   document.getElementById("TecTitle").innerHTML = "SPACEPORT";
   document.getElementById("LV").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
   document.getElementById("BtnTEC1").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC1").style.color  = "white";
   document.getElementById("BtnTEC2").style.backgroundColor  = "white";
   document.getElementById("BtnTEC2").style.color  = "black";
   document.getElementById("BtnTEC3").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC3").style.color  = "white";
   }
   function botaoT3() {
      document.getElementById("nave").src = "TE04.png";
      document.getElementById("ran").innerHTML = "THE TERMINOLOGY…";
      document.getElementById("TecTitle").innerHTML = "SPACE CAPSULE";
      document.getElementById("LV").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
      document.getElementById("BtnTEC1").style.backgroundColor  = "transparent";
      document.getElementById("BtnTEC1").style.color  = "white";
      document.getElementById("BtnTEC2").style.backgroundColor  = "transparent";
      document.getElementById("BtnTEC2").style.color  = "white";
      document.getElementById("BtnTEC3").style.backgroundColor  = "white";
      document.getElementById("BtnTEC3").style.color  = "black";
      }

function botaoT1M() {
   document.getElementById("naveM").src = "rocket.png";
   document.getElementById("ranM").innerHTML = "THE TERMINOLOGY...";
   document.getElementById("TecTitleM").innerHTML = "LAUNCH VEHICLE";
   document.getElementById("TxtEXP").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
   document.getElementById("BtnTEC1M").style.backgroundColor  = "white";
   document.getElementById("BtnTEC1M").style.color  = "black";
   document.getElementById("BtnTEC2").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC2").style.color  = "white";
   document.getElementById("BtnTEC3").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC3").style.color  = "white";
   }

function botaoT2M() {
   document.getElementById("naveM").src = "tech.png";
   document.getElementById("ranM").innerHTML = "THE TERMINOLOGY...";
   document.getElementById("TecTitleM").innerHTML = "SPACEPORT";
   document.getElementById("TxtEXP").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
   document.getElementById("BtnTEC1M").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC1M").style.color  = "white";
   document.getElementById("BtnTEC2").style.backgroundColor  = "white";
   document.getElementById("BtnTEC2").style.color  = "black";
   document.getElementById("BtnTEC3").style.backgroundColor  = "transparent";
   document.getElementById("BtnTEC3").style.color  = "white";
   }
function botaoT3M() {
      document.getElementById("naveM").src = "spacetec.png";
      document.getElementById("ranM").innerHTML = "THE TERMINOLOGY…";
      document.getElementById("TecTitleM").innerHTML = "SPACE CAPSULE";
      document.getElementById("TxtEXP").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
      document.getElementById("BtnTEC1M").style.backgroundColor  = "transparent";
      document.getElementById("BtnTEC1M").style.color  = "white";
      document.getElementById("BtnTEC2").style.backgroundColor  = "transparent";
      document.getElementById("BtnTEC2").style.color  = "white";
      document.getElementById("BtnTEC3").style.backgroundColor  = "white";
      document.getElementById("BtnTEC3").style.color  = "black";
      }