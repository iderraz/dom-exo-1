// > Créez une div avec dédans un h1, un h2, un input et un button


let maDiv = document.createElement("div");
// console.log(maDiv);

let monH1 = document.createElement("h1");
// console.log(monH1);
let monH2 = document.createElement("h2");
// console.log(monH2);
let moninput = document.createElement("input");
// console.log(moninput);
let monButton = document.createElement("button");
// console.log(monButton);

// maDiv.appendChild(monH1);
// maDiv.appendChild(monH2);
// maDiv.appendChild(moninput);
// maDiv.appendChild(monButton);

//ou bien en une fois comme ci-dessous
maDiv.append(monH1,monH2,moninput,monButton)

// > Affichez cette div dans l'HTML
let  myBody = document.querySelector("body");
myBody.appendChild(maDiv);
console.log(maDiv);

// > Le h1 doit contenir "Je suis un titre"
let texth1 = document.createTextNode("je suis un titre")
monH1.appendChild(texth1)

// > Le h2 doit contenir "Je suis un sous-titre"

let texth2 = document.createTextNode("je suis un sous-titre")
monH2.appendChild(texth2)

// > Le button doit contenu "Acceptez"

let textbutton = document.createTextNode("Acceptez")
monButton.appendChild(textbutton)

// > Changer le contenu du h1 en "Je suis un grand titre"

monH1.innerHTML = "Je suis un grand titre "

// > NE PAS TOUCHER A L'HTML