//javascript code
function myFuntion(){
    var mytext = "";
    var i;
    for (i = 0; i < 6; i++) {
      mytext += "Nummer " + i + "<br>";
      document.getElementById("test").innerHTML = mytext;
    }
    document.getElementById("test").innerHTML = mytext;
    console.log(mytext);


}
