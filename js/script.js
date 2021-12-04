window.onload = function() {
    init();
};

var public_spreadsheet_url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbueec9VRFpl57pqDYa1L8_w4lOCc9-WyUWSdOF8vcf01WMZDxuMxUJNzBPMBg2pCeG4maeSyCNLgs/pubhtml";

function init() {
    Tabletop.init({
        key: public_spreadsheet_url,
        callback: showInfo,
        simpleSheet: true,
    });
}

function showInfo(data, tabletop) {
    var person = document.querySelector(".person");
    person.innerHTML = "";
    var relationship = document.querySelector(".relationship");
    relationship.innerHTML = "";

    data.forEach(function(data) {
        console.log(data.Name);
        person.innerHTML += data.Name;
        relationship.innerHTML += data.Relationship;

    });

}