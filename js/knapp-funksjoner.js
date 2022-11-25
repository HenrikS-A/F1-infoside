
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


/* (Kode som Thor viste,)
addEventListener("resize", () => {
    if (window.innerWidth > 900){
        ..
    }
    console.log(window.innerWidth)
})
*/
