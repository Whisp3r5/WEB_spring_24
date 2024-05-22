//alert("Java works!");
function magic8ball() {
    askAquestion();
    shake();
    getAfortune();
}
function askAquestion() {
//alert("Ask a yes/no question and recieve an answer");
}
function shake() {
   // alert("I'm shaking");
}
function getAfortune() {
    var fortunes = ["yes", "no","maybe"];
    var num = rand_number(fortunes.length);
    displayFortune(fortunes[num]);
}

function displayFortune(fortune) {
    document.getElementById("fortune").innerHTML = fortune;
}
function rand_number(n) {
    return Math.floor(Math.random()*n);
}