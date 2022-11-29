
function visDropDown() {
    // [0] finner det første elementet med denne class-en.
    let dropDownMeny = document.getElementsByClassName("dropDownMeny")[0];

    // ! betyr "ikke" (eks: != betyr ikke lik).
    // denne if-setningen betyr at hvis dropDownMeny ikke har en display så ... 
    if (!dropDownMeny.style.display) {
        dropDownMeny.style.display = "flex";
    } else {
        // null betyr at variabelen er tom.
        dropDownMeny.style.display = null;
    }
};

function visMobilDropDown () {
    document.getElementById("mobilMenyIkon").style.display = "none";
    document.getElementById("mobilExitIkon").style.display = "block";
    document.getElementById("mobilDropDownMeny").style.display = "flex";

    document.getElementById("mobilMenyOverlay").style.display = "block";
};
function fjernMobilDropDown () {
    document.getElementById("mobilExitIkon").style.display = "none";
    document.getElementById("mobilMenyIkon").style.display = "block";
    document.getElementById("mobilDropDownMeny").style.display = "none";

    document.getElementById("mobilMenyOverlay").style.display = "none";
};

function tilToppen() {
    window.scrollTo({top: 0, behavior: "smooth"});
};
function scrollNed() {
    document.getElementById("scrollHit").scrollIntoView({behavior: "smooth"});
};



function shadowEffektFunksjon() {
    const navn = "Montreal";
    //Legger til shadow bak banen som scrolles til
    document.getElementById(navn).style.boxShadow = "20px 20px 20px yellow";
    
    // Etter 5s fjernes shadow-en
    setTimeout( () => {
        document.getElementById(navn).style.boxShadow = "none";
    }, 5000);
}

function scrollMontreal() {
    const navn = "Montreal";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    //henter fram funksjonen og kjører den
    shadowEffektFunksjon.call(this);
}
function scrollTexas() {
    const navn = "Texas";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollMiami() {
    const navn = "Miami";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollMexico() {
    const navn = "Mexico";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollBrasil() {
    const navn = "Brasil";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollEuropa() {
    const navn = "Europa";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollBaku() {
    const navn = "Baku";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollMidtøsten() {
    const navn = "Midtøsten";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollJapan() {
    const navn = "Japan";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollSingapore() {
    const navn = "Singapore";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}
function scrollAustralia() {
    const navn = "Australia";
    document.getElementById(navn).scrollIntoView({behavior: "smooth"});
    shadowEffektFunksjon.call(this);
}



/* (Kode som Thor viste,)
addEventListener("resize", () => {
    if (window.innerWidth > 900){
        ..
    }
    console.log(window.innerWidth)
})
*/
