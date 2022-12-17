let bg = document.querySelector("#bgColor");
let fg = document.querySelector("#fontColor");
let textarea = document.querySelector(".output");
let bold = document.querySelector(".getBold");
let sayi = 1;
let sayi1 = 1;
function getBold() {
    if (sayi % 2 == 1) {
        textarea.style.fontWeight = "bold";
    }
    else {
        textarea.style.fontWeight = "200";
    }
    sayi++;
}
function getBgColor() {
    textarea.style.backgroundColor = bg.value;
}
function getFontColor() {
    textarea.style.color = fg.value;
}
function alignmentStart() {
    if (!textarea.classList.contains("alignmentStart")) {
        textarea.classList.remove("alignmentCenter");
        textarea.classList.remove("alignmentEnd");
        textarea.classList.add("alignmentStart");
    }
    else {
        textarea.classList.remove("alignmentStart");
    }
}
function alignmentCenter() {
    if (!textarea.classList.contains("alignmentCenter")) {
        textarea.classList.remove("alignmentStart");
        textarea.classList.remove("alignmentEnd");
        textarea.classList.add("alignmentCenter");
    }
    else {
        textarea.classList.remove("alignmentCenter");
    }
}
function alignmentEnd() {
    if (!textarea.classList.contains("alignmentEnd")) {
        textarea.classList.remove("alignmentStart");
        textarea.classList.remove("alignmentCenter");
        textarea.classList.add("alignmentEnd");
    }
    else {
        textarea.classList.remove("alignmentEnd");
    }
}
function spacingRight() {
    if (!textarea.classList.contains("mr")) {
        textarea.classList.add("mr");
    }
    else {
        textarea.classList.remove("mr");
    }
}
function spacingLeft() {
    if (!textarea.classList.contains("ml")) {
        textarea.classList.add("ml");
    }
    else {
        textarea.classList.remove("ml");
    }
}
function getTxtUnderLine() {
    if (!textarea.classList.contains("TxtUnderLine")) {
        textarea.classList.add("TxtUnderLine");
    }
    else {
        textarea.classList.remove("TxtUnderLine");
    }
}
function getTxtItalic() {
    if (!textarea.classList.contains("TxtItalic")) {
        textarea.classList.add("TxtItalic");
    }
    else {
        textarea.classList.remove("TxtItalic");
    }
}
function getTxtUpperCase() {
    if (!textarea.classList.contains("upperCase")) {
        textarea.classList.remove("lowerCase");
        textarea.classList.add("upperCase");
    }
    else {
        textarea.classList.remove("upperCase");
    }
}
function getTxtLowerCase() {
    if (!textarea.classList.contains("lowerCase")) {
        textarea.classList.remove("upperCase");
        textarea.classList.add("lowerCase");
    }
    else {
        textarea.classList.remove("lowerCase");
    }
}
function getVerdana() {
    textarea.classList.remove("fontfamilyArial");
    textarea.classList.remove("fontfamilyTimesNewRoman");
    textarea.classList.remove("fontfamilyGeorgia");
}
function getFontFamilyGeorgia() {
    if (!textarea.classList.contains("fontfamilyGeorgia")) {
        textarea.classList.remove("fontfamilyArial");
        textarea.classList.remove("fontfamilyTimesNewRoman");
        textarea.classList.add("fontfamilyGeorgia");
    }
    else {
        textarea.classList.remove("fontfamilyGeorgia");
    }

}
function getFontFamilyTimesNewRoman() {
    if (!textarea.classList.contains("fontfamilyTimesNewRoman")) {
        textarea.classList.remove("fontfamilyArial");
        textarea.classList.remove("fontfamilyGeorgia");
        textarea.classList.add("fontfamilyTimesNewRoman");
    }
    else {
        textarea.classList.remove("fontfamilyTimesNewRoman");
    }

}
function getFontFamilyArial() {
    if (!textarea.classList.contains("fontfamilyArial")) {
        textarea.classList.remove("fontfamilyTimesNewRoman");
        textarea.classList.remove("fontfamilyGeorgia");
        textarea.classList.add("fontfamilyArial");
    }
    else {
        textarea.classList.remove("fontfamilyArial");
    }

}
function getTwoRem() {
    if (!textarea.classList.contains("twoRem")) {
        textarea.classList.remove("twoHalfRem");
        textarea.classList.remove("threeRem");
        textarea.classList.add("twoRem");
    }
    else {
        textarea.classList.remove("twoRem");
    }
}
function getTwoHalfRem() {
    if (!textarea.classList.contains("twoHalfRem")) {
        textarea.classList.remove("twoRem");
        textarea.classList.remove("threeRem");
        textarea.classList.add("twoHalfRem");
    }
    else {
        textarea.classList.remove("twoHalfRem");
    }
}
function getThreeRem() {
    if (!textarea.classList.contains("threeRem")) {
        textarea.classList.remove("twoRem");
        textarea.classList.remove("twoHalfRem");
        textarea.classList.add("threeRem");
    }
    else {
        textarea.classList.remove("threeRem");
    }
}
function getOneHalf() {
    textarea.classList.remove("twoRem");
    textarea.classList.remove("twoHalfRem");
    textarea.classList.remove("threeRem");
}
function clearAllLine() {
    textarea.innerHTML = " ";
}
function clearLine() {
    if (sayi1 == 1) {
        textarea.innerHTML = " ";
    }
    sayi1++;
}
